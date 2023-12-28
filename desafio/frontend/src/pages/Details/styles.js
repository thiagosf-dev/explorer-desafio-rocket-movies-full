import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto 1fr;
  grid-template-areas:
    "header"
    "label"
    "content";

  > a {
    grid-area: label;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 40px 116px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > main {
    grid-area: content;
    padding: 0 116px;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > p {
    font-size: 16px;
    margin-bottom: 40px;
    font-weight: 400;
    text-align: justify;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 24px;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-bottom: 40px;

  img {
    width: 24px;
    height: 24px;
    border: none;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    overflow: hidden;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 40px;
`;
