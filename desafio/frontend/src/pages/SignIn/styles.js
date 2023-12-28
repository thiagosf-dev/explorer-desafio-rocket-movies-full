import styled from "styled-components";
import backgroundImg from "./../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div + div {
    margin-top: 8px;
  }

  > button {
    margin-top: 24px;
    margin-bottom: 42px;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) center center;
  background-size: cover;
  overflow: hidden;
  opacity: 0.75;
`;
