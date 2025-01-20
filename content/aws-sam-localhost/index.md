---
emoji: 🛖
title: AWS SAM을 활용한 Lambda 로컬 테스트 가이드
date: '2025-01-20 11:31:25'
author: 임재영
tags: 인프라 github-pages gatsby
categories: 인프라
thumbnail: './thumbnail.png'
---

### 요약

> - 요약 내용이 필요하다
> - 요약 내용이 필요하다

### 시작하며
AWS Lambda 함수에서 직접 백엔드 코드를 호출하고 싶습니다.
하지만 AWS 환경에 있는 Lambda 함수는 로컬 환경에 있는 백엔드 코드를 직접 호출할 수 없습니다.
또한 Lambda 함수를 매번 테스트할 때마다 AWS 환경으로 전환하여 테스트하기에는 무리가 있습니다.

이런 상황에서 Lambda 함수를 AWS 환경이 아닌 로컬 환경에서 구동하고 싶은 생각이 들었고,
AWS SAM(AWS Serverless Application Model)을 활용하여 Lambda 함수를 로컬에서 테스트할 수 있는 환경을 구축하고자 합니다.

---

### SAM 프로젝트 세팅하기

1. Pycharm IDE에서 `AWS Toolkit` 플러그인 설치가 필요합니다.

![sam-01.png](sam-01.png)

2. IDE 재부팅 이후, 새 프로젝트를 생성하여 좌측 하단 'Other' 탭을 펼치고 'AWS Serverless Application' 항목을 선택합니다.

![sam-2.png](sam-2.png)

- Package Type : `Image` 항목을 선택합니다.
- SAM Template : `AWS SAM Hello World` 항목을 선택합니다.

3. 아래 그림과 같이 준비되었다면 성공입니다.

<img alt="plugin 환경 설정" src="sam-3.png">

---

### 구성 요소 살펴보기

#### **app.py ⭐**
```python
import json

def lambda_handler(event, context):
    return {
    "statusCode": 200,
    "body": json.dumps(
        {
            "message": "hello NHN!",
        }
    )
}
```
- 메인함수 핸들러를 포함하는 본체 함수입니다.

#### **template.yaml 🍫**
```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: >
  python3.12

  Sample SAM Template for sam-local-test

Globals:
  Function:
    Timeout: 3

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      PackageType: Image
      Architectures:
        - x86_64
      MemorySize: 256
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get
    Metadata:
      Dockerfile: Dockerfile
      DockerContext: ./hello_world
      DockerTag: python3.12-v1

Outputs:
  HelloWorldApi:
    Description: "API Gateway endpoint URL for Prod stage for Hello World function"
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/hello/"
  HelloWorldFunction:
    Description: "Hello World Lambda Function ARN"
    Value: !GetAtt HelloWorldFunction.Arn
  HelloWorldFunctionIamRole:
    Description: "Implicit IAM Role created for Hello World function"
    Value: !GetAtt HelloWorldFunctionRole.Arn
```
- Lambda 함수와 관련된 AWS 리소스 및 여러 설정을 정의합니다.
- Docker 이미지를 사용하는 경우 이를 참조합니다.

#### **Dockerfile 🐳**
```dockerfile
FROM public.ecr.aws/lambda/python:3.12
COPY app.py requirements.txt ./
RUN python3.12 -m pip install -r requirements.txt -t .
CMD ["app.lambda_handler"]
```
- Lambda 함수를 실행할 이미지를 커스터마이징할 때 사용합니다.

---

### Lambda 함수 실행하기
