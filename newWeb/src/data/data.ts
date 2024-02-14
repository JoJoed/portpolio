import {
  introDataType,
  projectDataType,
  skillDataType,
} from "@src/types/dataType";
import dayjs from "dayjs";

const introData: introDataType = {
  ["학력"]: "전주 비전대학교. 2018.03 ~ 2022.03",
  ["경력"]: `2021.08 ~ 2022.12 (Medieng System), 2023.02 ~ ${dayjs().format(
    "YYYY.MM",
  )} (Clamos)`,

  ["이메일"]: "jojh9904@gmail.com",
  ["github"]: "https://github.com/JoJoed",
};
const projectData: projectDataType[] = [
  {
    projectName: "버스 관리 시스템",
    start: "2021-08",
    end: "2021-10",
    description: "기존 버스 내부의 디지털 안내 서비스 변경사업. 전주시 주관.",
  },
  {
    projectName: "태양광 관리 시스템",
    start: "2021-11",
    end: "2022-01",
    link: "https://sunmoa.kr",
    description: "",
  },
  {
    projectName: "메디앙 시스템 홈페이지",
    start: "2022-02",
    end: "2022-03",
    link: "https://medieng.com",
    description: "자사 홈페이지",
  },
  {
    projectName: "푸드플랜 소비자 앱",
    start: "2022-04",
    end: "2022-06",
    link: "https://play.google.com/store/apps/details?id=com.Medieng.localconsumer",
    description:
      "로컬푸드 매장 사용자를 위한 매장정보, 포인트, 결제내역, 쿠폰 등의 기능을 사용할 수 있는 앱",
  },
  {
    projectName: "지구살림조합 키오스크, 모바일 앱",
    start: "2022-07",
    end: "2022-09",
    description: "중고 거래장터 키오스크 앱",
  },
  {
    projectName: "더빙고 홈페이지",
    start: "2022-09",
    end: "2022-11",
    description: "외주 홈페이지",
  },
  {
    projectName: "경기도 교육청 지역자원 정보시스템",
    start: "2023-02",
    end: "2023-05",
    description: "차트, gis를 통한 시각화 대시보드",
  },
  {
    projectName: "화성시청 고도화구축 WEB 전환",
    start: "2023-05",
    end: "2023-08",
    link: "http://total.hscity.go.kr/web/dashboard-main",
    description: "화성시청 대시보드",
  },
  {
    projectName:
      "[금융보안원] 금융보안관제센터 종합상황실 노후 시스템 교체 도입",
    start: "2023-09",
    end: "2023-11",
    description: "Cesium를 통한 지구본 공격루트 시각화 대시보드",
  },
];

const skillData: skillDataType[] = [
  {
    title: "SKILL",
    data: [
      {
        src: "/assets/img/contents/webpack.svg",
        name: "webpack",
      },
      {
        src: "/assets/img/contents/docker.svg",
        name: "docker",
      },
      {
        src: "/assets/img/contents/react.svg",
        name: "react",
      },
    ],
  },
  {
    title: "SERVER",
    data: [
      {
        src: "/assets/img/contents/nginx.svg",
        name: "nginx",
      },
      {
        src: "/assets/img/contents/tomcat.svg",
        name: "tomcat",
      },
    ],
  },
  {
    title: "COOPERATION",
    data: [
      {
        src: "/assets/img/contents/figma.svg",
        name: "figma",
      },
      {
        src: "/assets/img/contents/jira.svg",
        name: "jira",
      },
      {
        src: "/assets/img/contents/notion.svg",
        name: "notion",
      },
    ],
  },
  {
    title: "TRY TO",
    data: [
      {
        src: "/assets/img/contents/node_express.svg",
        name: "express",
      },
      {
        src: "/assets/img/contents/spring.svg",
        name: "spring",
      },
    ],
  },
];

export { introData, projectData, skillData };
