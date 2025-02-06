---
emoji: 👋🏻
title: Handler 클래스를 사용한 처리 흐름 조정
date: '2025-02-01 15:00:00'
author: 임재영
tags: 백엔드 github-pages gatsby
categories: 백엔드
thumbnail: 'thumbnail.png'
---

### 💡 요약

> - private 메서드의 테스트 코드 작성 이슈 발생
> - Handler, Service 클래스를 만들어 분리하자!
> - Controller 클래스는 누구를 의존하면 될까?

### ✅ 시작하며

Service 클래스에서 하나의 메서드에 여러 역할을 만들기 싫어서, 여러 private 메서드를 선언하여(해당 클래스 내부에서만 사용하므로) 역할을 분리하였습니다.
구현 상의 문제는 없었지만, 메서드별로 단위 테스트를 작성할 때 어려움이 생겼습니다. 

private 메서드의 단위 테스트를 작성하기 위해 부수적인 무언가를 해야할까? 혹은 내가 코드를 잘못 짠 것인가?
고민 끝에 발견한 답변에 대해 소개합니다!

---

### ✅ 클래스 단위로 분리하기

단위 테스트가 가능하면서도 역할이 분리된 구조를 만들고 싶다면? 여러 기능을 별도의 클래스를 사용하거나, 인터페이스로 분리하고 의존성을 주입받는 방식으로 구현하면 됩니다.

예를 들어, 온라인 쇼핑몰에서 주문이 들어오면 다음과 같은 작업이 필요합니다.
1. 주문을 저장
2. 결제를 처리
3. 주문 완료 알림을 전송

위의 기능들을 하나의 클래스에 작성한다면, 아래와 같이 구현할 수 있습니다.

```kotlin
class OrderService (
    private val orderRepository: OrderRepository
) {
    fun processOrder(requestDto: OrderRequestDto) {
        val order = saveOrder(requestDto)
        processPayment(order)
        sendOrderConfirmation(order)
    }
    
    private fun saveOrder(requestDto: OrderRequestDto): Order {
        return orderRepository.save(OrderConverter.toEntityFrom(requestDto))
    }
    
    private fun processPayment(order: Order): {
        // 결제 처리 로직 (예: 외부 결제 API 호출)
    }
    
    private fun sendOrderConfirmation(order: Order) {
        // 고객에게 주문 완료 알림 발송 (예: 이메일, SMS)
    }
}
```
하지만 하나의 클래스에 모든 기능을 넣어버리면, private 메서드의 단위 테스트를 작성하는데 어려움이 있습니다.
따라서 각각의 기능을 독립적인 Service로 분리하고, 이를 Handler에서 조합하고 처리 흐름을 조정합니다.

```kotlin
class OrderHandler(
    private val orderService: OrderService,
    private val paymentService: PaymentService,
    private val notificationService: NotificationService
) {
    fun processOrder(requestDto: OrderRequestDto) {
        val order = orderService.saveOrder(requestDto)  // 주문 저장
        paymentService.processPayment(order)  // 결제 처리
        notificationService.sendOrderConfirmation(order)  // 알림 발송
    }
}

// 주문을 저장 (OrderService)
class OrderService (
    private val orderRepository: OrderRepository
) {
    fun saveOrder(requestDto: OrderRequestDto): Order {
        return orderRepository.save(OrderConverter.toEntityFrom(requestDto))
    }
}

// 결제를 처리 (PaymentService)
class PaymentService (
) {
    fun processPayment(order: Order) {
        // 결제 처리 로직 (예: 외부 결제 API 호출)
    }
}

// 주문 완료 알림 전송 (NotificationService)
class NotificationService (
) {
    fun sendOrderConfirmation(order: Order) {
        // 고객에게 주문 완료 알림 발송 (예: 이메일, SMS)
    }
}
```
위와 같이 구현하면 모든 Service는 개별적으로 테스트가 가능하고, Handler를 통해 전체적인 흐름을 제어할 수 있어 비즈니스 로직이 명확해집니다.
또한 Controller는 Handler를 호출하면 되기 때문에, 유지보수도 쉬워집니다.

---

### ✅ Handler vs Service 차이점 분석

그렇다면 둘은 어떤 차이점이 있을까요?

|   **개념**    |             **역할**             |          **사용 예시**           |
|-------------|:------------------------------:|:----------------------------:|
| **Service** |  특정 도메인(비즈니스 로직)과 관련된 기능을 캡슐화  |  UserService, OrderService   |
| **Handler** | 요청을 받아서 여러 서비스를 조합하고 처리 흐름을 조정 | EventHandler, MessageHandler |

**Service 중심의 설계**

```kotlin
class OrderService (
    private val orderRepository: OrderRepository
) {
    fun saveOrder(requestDto: OrderRequestDto): Order {
        return orderRepository.save(OrderConverter.toEntityFrom(requestDto))
    }
}

class PaymentService (
) {
    fun processPayment(order: Order) {
        // 결제 처리 로직 (예: 외부 결제 API 호출)
    }
}
```
- 특정 도메인을 기준으로 Service를 만들어 분리할 수 있습니다.
- 각각의 Service는 독립적으로 테스트할 수 있습니다.

**Handler 활용한 흐름 제어**

```kotlin
class OrderHandler(
    private val orderService: OrderService,
    private val paymentService: PaymentService
) {
    fun processOrder(requestDto: OrderRequestDto) {
        val order = orderService.saveOrder(requestDto)
        paymentService.processPayment(order)
    }
}
```
- 적절한 Service를 호출하여 조합할 수 있습니다.
- 전체적인 처리 흐름을 조정할 수 있습니다.
---

### ✅ Controller 입장에서 생각하기

그렇다면 로직에 따라 어떤 Controller는 Service를 참조할 수도 있고, Handler를 참조할 수도 있습니다.
어떤 설계가 적절한지 고민해볼까요?

**1. Controller → Service**

전형적인 Spring MVC 구조입니다. 대부분 일반적인 API 설계 방식이며, 간결하고 직관적인 것이 장점입니다.
하지만 여러 서비스 호출이 필요할 경우, 복잡해질 가능성이 있습니다.

**2. Controller → Handler → Service**

추가적인 계층이 생겼습니다. 
이렇게 되면 Service는 비즈니스 로직만 담당하면 되고, Handler를 사용하여 흐름을 제어할 수 있게 되어, 전체적인 구조나 클래스의 책임 측면에서 봐도 더 깔끔해졌습니다. 
하지만 프로젝트 내에서 일관성을 유지하는 것은 중요합니다.
어떤 Controller는 Service를 직접 참조하고, 어떤 Controller는 Handler를 통해 Service를 다룬다면 일관성이 깨지게 되니,
상황에 맞는 적절한 방식을 선택하여 적용하는 것이 필요합니다. 

따라서 저는 아래 체크리스트를 활용하여 방식 선택을 진행할 것입니다.

|          **기준**          |            **예시**             |
|:------------------------:|:-----------------------------:|
|   **여러 기능의 조합이 필요한가?**   |   회원 가입 -> 사용자 저장 -> 이메일 전송   |
|  **이벤트 기반의 처리가 필요한가?**   |       주문 완료 시 알림 전송 이벤트       |
| **메시지 큐, 배치 처리가 필요한가?**  | Amazon SQS 안의 메시지를 활용한 데이터 처리 |
