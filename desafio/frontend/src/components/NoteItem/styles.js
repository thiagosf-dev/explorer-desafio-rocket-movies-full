import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 16px;
  background-color: ${({ $isnew, theme }) =>
    $isnew ? `transparent` : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ $isnew, theme }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : `none`};

  button {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background: none;

    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    width: 100%;
    height: 56px;
    border: none;
    padding: 12px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
