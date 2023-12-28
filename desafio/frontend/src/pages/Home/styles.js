import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 116px auto 1fr;
  grid-template-areas:
    "header"
    "label"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 0 116px;
  overflow-y: auto;
`;

export const TitlePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 32px;
    font-weight: 400;
    border-bottom-width: 1px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 47px 116px;

  h1 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    height: 48px;
    padding: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
