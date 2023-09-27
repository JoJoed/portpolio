import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import projectData from "../../data/projectData";
import { Font } from "../util/GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1110px) {
    font-size: 18px;
  }
`;

const TableOverFlow = styled.div`
  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }
  @media screen and (max-width: 950px) {
    overflow: scroll;
    overflow-y: hidden;
  }

  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  min-width: 880px;
`;

const Body = styled.tbody`
  width: 100%;
  & > tr:nth-last-child(1) {
    border-bottom: 1px solid white;
  }
`;

const Title = styled.thead`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #a3a3a3;
  & > tr {
    border: none;
  }
`;

const Row = styled.tr`
  display: flex;
  width: 100%;
  margin: 1em 0;
  border-bottom: 1px solid #484848;
  padding-bottom: 1em;
`;

const Item = styled.td`
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: break-all;
  flex-wrap: wrap;
  margin-right: 0.5em;
  align-items: flex-start;
  line-height: 1.2em;
`;

const LinkAlign = styled.div`
  border-bottom: 1px solid white;
`;

const BottomInfo = styled.div`
  display: flex;
  margin: 1em 0;
  align-items: center;
  justify-content: flex-end;
`;

const ProjectList = () => {
  const moveLink = (e: string) => {
    e && window.open(e, "_blank");
  };
  return (
    <Container>
      <BottomInfo>
        <Font size="0.8em" color="#939393">
          ※ 운영중인 서비스만 링크가 표시됩니다.
        </Font>
      </BottomInfo>
      <TableOverFlow>
        <Table>
          <Title>
            <Row>
              {projectData?.projectList?.map((r: any, index: number) => (
                <Item key={`projectTitle${index}`}>
                  <Font color="white" size="0.9em">
                    {r?.title}
                  </Font>
                </Item>
              ))}
            </Row>
          </Title>
          <Body>
            {projectData?.data?.map((r: any, index: number) => (
              <Row key={`projectData${index}`}>
                <Item>
                  <Font color="white" size="0.8em">
                    {r?.projectname}
                  </Font>
                </Item>
                <Item>
                  <Font color="white" size="0.8em">
                    {dayjs(r?.start).format("YY.MM.DD") +
                      " ~ " +
                      dayjs(r?.end).format("YY.MM.DD")}
                  </Font>
                </Item>
                <Item>
                  {r?.contribution?.frontend && (
                    <Font color="white" size="0.8em">
                      frontend: {r?.contribution.frontend}%
                    </Font>
                  )}
                  {r?.contribution?.backend && (
                    <Font color="white" size="0.8em">
                      backend: {r?.contribution.backend}%
                    </Font>
                  )}
                </Item>
                <Item>
                  {r?.language?.length > 0 &&
                    r?.language?.map((f: any, index: number) => (
                      <Font
                        color="white"
                        size="0.8em"
                        key={`languageIndex${index + f}`}
                      >
                        {f.name}
                      </Font>
                    ))}
                </Item>
                <Item>
                  {r?.framework?.length > 0 &&
                    r?.framework?.map((f: any, index: number) => (
                      <Font
                        color="white"
                        size="0.8em"
                        key={`frameworkIndex${index + f}`}
                      >
                        {f.name}
                      </Font>
                    ))}
                </Item>
                <Item>
                  {r?.link ? (
                    <>
                      {r?.link?.web && (
                        <LinkAlign>
                          <Font
                            color="white"
                            size="0.8em"
                            bold="bold"
                            cursor="true"
                            onClick={() => moveLink(r.link.web || "")}
                          >
                            web
                          </Font>
                        </LinkAlign>
                      )}
                      {r?.link?.app && (
                        <LinkAlign>
                          <Font
                            color="white"
                            size="0.8em"
                            bold="bold"
                            cursor="true"
                            onClick={() => moveLink(r.link.app || "")}
                          >
                            app
                          </Font>
                        </LinkAlign>
                      )}
                    </>
                  ) : (
                    <Font color="white" size="0.8em">
                      X
                    </Font>
                  )}
                </Item>
              </Row>
            ))}
          </Body>
        </Table>
      </TableOverFlow>
    </Container>
  );
};

export default ProjectList;
