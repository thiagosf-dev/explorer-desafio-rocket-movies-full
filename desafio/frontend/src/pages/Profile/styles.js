import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 124px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &:first-child button {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      justify-content: center;
      border-radius: 50%;
      padding: 12px;
    }

    &:first-child button:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      filter: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div + div {
    margin-bottom: 8px;
  }

  > div:nth-child(3) {
    margin-bottom: 24px;
  }

  button {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    overflow: hidden;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;
