import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 20px;
    font-weight: 400;
    border-bottom-width: 1px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  /* a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 207px;
    height: 48px;
    border-radius: 8px;
    padding: 32px;
    font-size: 16px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    a > img {
      width: 16px;
      height: 16px;
    }
  } */
`;

// export const Container = styled.section`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	margin: 48px 116px 38px 116px;

// 	> h2 {
// 		font-size: 32px;
// 		font-weight: 400;
// 		border-bottom-width: 1px;
// 	}

// 	a {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		gap: 8px;
// 		width: 207px;
// 		height: 48px;
// 		border-radius: 8px;
// 		padding: 32px;
// 		font-size: 16px;
// 		font-weight: 400;
// 		background-color: ${({ theme }) => theme.COLORS.GRAY_100};
// 		color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

// 		a > img {
// 			width: 16px;
// 			height: 16px;
// 		}
// 	}
// `;
