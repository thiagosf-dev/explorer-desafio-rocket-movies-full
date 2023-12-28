import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  /* padding: 0 116px; */
  grid-auto-rows: 105px auto 1fr;
  grid-template-areas:
    "header"
    "title"
    "content";

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 40px 116px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > main {
    grid-area: content;
    grid-template-rows: 1fr;
  }

  .tags {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
    margin: 0;
    border-radius: 8px;
    padding: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
	padding: 0 116px;

  header {
		h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  button {
    font-size: 16px;
    font-weight: 500;
  }

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  button:nth-child(2) {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.BLACK_600};
  }
`;
