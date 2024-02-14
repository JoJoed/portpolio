import dayjs from "dayjs";

export default {
  projectList: [
    {
      title: "프로젝트 이름",
    },
    {
      title: "기간",
    },
    {
      title: "기여도",
    },
    {
      title: "언어",
    },
    {
      title: "프레임워크",
    },
    {
      title: "링크",
    },
  ],
  data: [
    {
      projectname: "버스 관리 시스템",
      start: "2021-08",
      end: "2021-10",
      contribution: {
        frontend: "100",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "js",
        },
      ],
      framework: [
        {
          name: "react",
        },
      ],
    },
    {
      projectname: "태양광 관리 시스템",
      start: "2021-11",
      end: "2022-01",
      contribution: {
        frontend: "100",
      },
      link: {
        web: "https://sunmoa.kr",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "js",
        },
      ],
      framework: [
        {
          name: "react",
        },
      ],
    },
    {
      projectname: "메디앙 시스템 홈페이지",
      start: "2022-02",
      end: "2022-03",
      contribution: {
        frontend: "100",
      },
      link: {
        web: "https://medieng.com",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "js",
        },
      ],
      framework: [
        {
          name: "react",
        },
      ],
    },
    {
      projectname: "푸드플랜 소비자 앱",
      start: "2022-04",
      end: "2022-06",
      contribution: {
        frontend: "100",
      },
      link: {
        app: "https://play.google.com/store/apps/details?id=com.Medieng.localconsumer",
      },
      language: [
        {
          name: "css",
        },
        {
          name: "js",
        },
      ],
      framework: [
        {
          name: "reactNative, expo",
        },
      ],
    },
    {
      projectname: "지구살림조합 키오스크, 모바일 앱",
      start: "2022-09",
      end: "2022-10",
      contribution: {
        frontend: "100",
      },
      language: [
        {
          name: "css",
        },
        {
          name: "js",
        },
      ],
      framework: [
        {
          name: "reactNative, expo",
        },
      ],
    },
    {
      projectname: "더빙고 홈페이지",
      start: "2022-09",
      end: "2022-11",
      contribution: {
        frontend: "100",
        backend: "100",
      },
      link: {
        web: "https://더빙고.kr",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "js",
        },
        {
          name: "java",
        },
      ],
      framework: [
        {
          name: "react",
        },
        {
          name: "spring",
        },
      ],
    },
    {
      projectname: "경기도 교육청 지역자원 정보시스템",
      start: "2023-02",
      end: "2023-05",
      contribution: {
        frontend: "100",
      },
      link: {
        web: "https://data.goe.go.kr",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "typescript",
        },
      ],
      framework: [
        {
          name: "react",
        },
      ],
    },
    {
      projectname: "화성시청 고도화구축 WEB 전환",
      start: "2023-05",
      end: "2023-08",
      contribution: {
        frontend: "100",
      },
      link: {
        web: "https://data.goe.go.kr",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "typescript",
        },
      ],
      framework: [
        {
          name: "react",
        },
      ],
    },
    {
      projectname:
        "[금융보안원] 금융보안관제센터 종합상황실 노후 시스템 교체 도입",
      start: "2023-09",
      end: "2023-11",
      contribution: {
        frontend: "100",
      },
      link: {
        web: "https://kaleidoscopic-moonbeam-eb8e2a.netlify.app/dashboard",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "typescript",
        },
      ],
      framework: [
        {
          name: "react",
        },
        {
          name: "cesium",
        },
      ],
    },
    {
      projectname: "대통령경호처 통합플랫폼관제 구축사업",
      start: "2023-11",
      end: dayjs().format("YYYY-MM-DD"),
      contribution: {
        frontend: "100",
      },
      language: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "typescript",
        },
      ],
      framework: [
        {
          name: "react",
        },
        {
          name: "cesium",
        },
      ],
    },
  ],
};
