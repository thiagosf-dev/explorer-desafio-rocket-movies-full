import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 275px;
  border: none;
  resize: none;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
