import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    font-weight: 700;
    padding: 0 0 0 116px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  padding: 0 0 0 24px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 116px 0 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 9px;

    a {
      font-size: 14px;
      font-weight: 700;
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 14px;
      font-weight: 400;
      border: none;
      background: none;
			text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    :last-child {
      display: flex;
      flex-direction: row-reverse;
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
