module.exports = {
  title: ` `,
  type: ` `,
  logo: `/logo.svg`,
  description: `개발자 임재영의 기술 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jaeyoung.site`, // https://s-jooyoung.github.io
  siteMap: `https://jaeyoung.site`, // https://s-jooyoung.github.io/sitemap-pages.xml
  ogImage: `/ogImage.jpg`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: 'S-jooyoung/joyTech-comments',
    },
  },
  as: 'ca-pub-4083591465738564',
  author: {
    name: `Jaeyoung Lim`,
    bio: {
      role: `개발자`,
      description:
        'MLOps Engineer & Backend Developer',
      thumbnail: 'myPicture.jpg', // Path to the image in the 'asset' folder
      thumbnailSmall: 'myPicture_small.jpg',
    },
    social: {
      github: `https://github.com/limjustin`,
      linkedIn: `https://www.linkedin.com/in/youngjaelim`,
      email: `limjyjustin@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    introduce: [
      'Junior MLOps Engineer & Backend Developer 임재영입니다.',
      '모든 일을 꼼꼼하고 열정적으로 처리하는데 자신이 있습니다.'
      // '공유 별장 스타트업 스테이빌리티에서는 프론트엔드 업무를 혼자 담당하며 밀리언그라운드 서비스의 모든 IT 기능을 개발 및 운영했습니다. 현재 예약 오류율과 결제 ' +
      // '오류율을 1% 미만으로 유지하고 있으며, 2024년 초에 오픈한 “어나더 빌라”는 2024년 예약을 모두 완료했습니다.',
      // '스타법무법인에서는 단순 업무를 자동화하는 백오피스를 기획 및 개발하여 서비스팀의 주당 업무 시간을 30시간 이상 절감했습니다. 또한, 각종 페이지의 UI/UX ' +
      // '디자인을 개선하여 사용자 경험을 향상한 경험이 있습니다.',
      // '저는 문제를 해결하며 비즈니스 성장에 기여하는 것을 최우선으로 생각합니다. 이를 위해 빠른 개발과 배포를 통해 신속하게 결과물을 전달하고, 데이터를 활용해 ' +
      // '사용자 이해도를 높이는 역량을 지속적으로 키워왔습니다.',
    ],
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        activity: '',
        activityDescription: '',
        job: '',
        jobDescriptions: [''],
        date: '',
        link: '',
      },
      // ========================================================
      // ========================================================
      {
        activity: 'NHN AD',
        activityDescription:
          'logo_nhnad.png',
        job: 'NHN AD',
        jobDescriptions: [
          '머신러닝을 활용한 애드테크 플랫폼을 개발하고 있습니다.',
        ],
        date: '2024.08 - 현재',
        link: 'https://nhnad.com/nhnad/index.nhn',
      },
      {
        activity: '상명대학교 서울캠퍼스',
        activityDescription:
          'logo_smu.png',
        job: '상명대학교 서울캠퍼스',
        jobDescriptions: [
          '○ 휴먼지능정보공학 전공 (컴퓨터과학 부전공)',
          '○ 전체 평점 4.05 / 4.5 (전공 평점 4.20 / 4.5)',
          '○ SW Scholarship - Top in Department (2020 Fall Semester)',
          '○ 제 2회 SM AI 경진대회 - AI 부문 최우수상 수상',
          '○ 제 1회 SM AI 경진대회 - AI 부문 장려상 수상',
        ],
        date: '2019.03 - 2025.02',
        link: 'https://nhnad.com/nhnad/index.nhn',
      },
      {
        activity: '대한민국 공군',
        activityDescription:
          'logo_rokaf.png',
        job: '대한민국 공군',
        jobDescriptions: [
          '○ 한미연합 정보체계관리병',
          '○ 공군 병장 만기전역 (21개월)',
        ],
        date: '2021.02 - 2022.11',
        link: 'https://nhnad.com/nhnad/index.nhn',
      },

    ],
    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        subTitle: '',
        affiliation: '',
        descriptions: ['', ''],
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '제주 청년 정책 통합 플랫폼 \'뿌리\'',
        subTitle: '제주 청년들을 위한 생성형 AI 기반 정책 정보 추천 및 통합 플랫폼',
        affiliation: '10th 9oormthon in JEJU 카카오대표이사상(대상) 🥇',
        descriptions: [
          '생성형 AI를 활용하여 추천 시스템 구축',
          'k8s 기반 크램폴린IDE 사용하여 백엔드 아키텍처 구축 및 배포',
          '1인 백엔드 개발자로 서버 구현, 데이터베이스 설계, 배포 담당'
        ],
        techStack: ['k8s', 'spring', 'querydsl', 'java'],
        thumbnailUrl: 'project_wepik.png',
        links: {
          github: 'https://github.com/9OORMTHON-PPOORI',
          post: 'https://9oormthon.goorm.io/83182701-089a-4441-8589-c072b4102fe6',
        },
      },
      {
        title: '나만의 메이크업 메이트 : 메메(MEME)',
        subTitle: '모델과 아티스트를 위한 메이크업 예약 어플리케이션',
        affiliation: '5th UMC Demoday 인기상 ✨',
        descriptions: [
          '마이크로서비스 아키텍처 적용하고 있는 프로젝트',
          'Spring Security 사용하여 인증 및 인가 서버 구현',
          'Redis를 사용한 분산 락 방식으로 예약 동시성 문제 해결',
        ],
        techStack: ['msa', 'redis', 'spring', 'java', 'kotlin'],
        thumbnailUrl: 'project_ppoori.png',
        links: {
          github: 'https://github.com/MEME-UMC',
        },
      },
      {
        title: 'HEALODY',
        subTitle: '가족의 건강 정보를 기록하고 공유하는 서비스',
        affiliation: '2023 NE(O)RINDARY DEMODAY 참가',
        descriptions: [
          'Github Actions, Docker 사용하여 AWS 환경에 배포',
          '백엔드 파트 리더 담당',
        ],
        techStack: ['spring', 'java', 'aws'],
        thumbnailUrl: 'project_blog.png',
        links: {
          github: 'https://github.com/UMC-Healody',
        },
      },
      {
        title: 'UNTACT-ICON(언택티콘)',
        subTitle: '비대면 강의 중 학습자 상태 파악 AI 모듈',
        affiliation: '제 2회 SM AI 경진대회 최우수상 🥈',
        descriptions: [
          'Face Detection 모델을 사용하여 학습자의 표정을 파악',
          '사용자 상태 판별 핵심 알고리즘 구현',
        ],
        techStack: ['python', 'face-detection'],
        thumbnailUrl: 'project_wedding.png',
        links: {
          github: 'https://github.com/limjustin/Untacticon',
          post: 'https://www.smu.ac.kr/webzine/sm-people.do?mode=view&articleNo=714722&article.offset=45&articleLimit=9',
        },
      },
    ],
  },
};
