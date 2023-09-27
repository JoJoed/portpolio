import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Font } from "../util/GlobalStyle";

interface pageParentType {
  children?: ReactNode | ReactElement;
  title?: string;
  id?: string;
}

const Container = styled.div`
  /* width: 1200px; */
  width: 90%;
  margin: 15% auto;
  max-width: 1300px;
  /* transition: all 1s ease-in-out;
  opacity: 0; */
`;

const TitleContent = styled.div`
  margin-bottom: 1.5em;
`;

const PageParent = ({ children, title, id }: pageParentType) => {
  return (
    <Container id={id}>
      <TitleContent>
        <Font bold="bold" size="25px" color="white">
          {title}
        </Font>
      </TitleContent>
      {children}
    </Container>
  );
};
export default PageParent;
