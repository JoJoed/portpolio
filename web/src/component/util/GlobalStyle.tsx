import styled from "styled-components";

interface fontType {
  bold?: string;
  size?: string;
  color?: string;
  margin?: string;
  cursor?: string;
}

export const Font = styled.span<fontType>`
  font-family: "GmarketSans";
  font-weight: ${(e) => e.bold || "400"};
  font-size: ${(e) => e.size || "18px"};
  color: ${(e) => e.color || "black"};
  margin: ${(e) => e.margin || "0"};
  cursor: ${(e) => (e.cursor ? "pointer" : "default")};
`;

export const FontSize = {
  intro: window.innerWidth >= 980 ? "18px" : "15px",
  footer: "16px",
};
