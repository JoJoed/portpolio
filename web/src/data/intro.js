import dayjs from "dayjs";

export default [
  {
    leftText: "학력",
    text: [
      {
        text: `전주 비전대학교. ${dayjs("2018-03").format("YY.MM")} ~ ${dayjs(
          "2022-02",
        ).format("YY.MM")}`,
      },
    ],
  },
  {
    leftText: "경력",
    text: [
      {
        text: `[ Medieng System ${dayjs("2021-08").format("YY.MM")} ~ ${dayjs(
          "2022-11",
        ).format("YY.MM")} ] - [ Clamos ${dayjs("2023-02").format(
          "YY.MM",
        )} ~ ing ]`,
      },
    ],
  },
  {
    leftText: "이메일",
    text: [{ text: "jojh9904@gmail.com" }],
  },
  {
    leftText: "연락처",
    text: [{ text: "010-2950-0634" }],
  },
];
