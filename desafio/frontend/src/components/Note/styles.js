import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	border: none;
	border-radius: 10px;
	/* padding: 22px; */
	/* margin-bottom: 16px; */
	color: white;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	> h2 {
		flex: 1;
		/* text-align: left; */
		/* font-weight: 700; */
		/* font-size: 24px; */
		color: ${({ theme }) => theme.COLORS.WHITE};
	}
`;
