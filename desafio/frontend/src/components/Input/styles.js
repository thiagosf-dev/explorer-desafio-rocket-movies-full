import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	color: ${({ theme }) => theme.COLORS.GRAY_300};

	> svg {
		margin-left: 16px;
	}

	> input {
		height: 56px;
		width: 100%;
		padding: 12px;
		border: 0;
		background-color: transparent;
		color: ${({ theme }) => theme.COLORS.WHITE};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}
	}
`;
