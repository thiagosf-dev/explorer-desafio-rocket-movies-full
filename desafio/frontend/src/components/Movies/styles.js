import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border: none;
	border-radius: 16px;
	margin-bottom: 24px;
	padding: 32px;
	cursor: pointer;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	&:hover {
		filter: brightness(1.3);
	}

	> h2 {
		font-weight: 700;
		font-size: 24px;
		color: ${({ theme }) => theme.COLORS.WHITE};
	}

	.stars {
		display: flex;
		gap: 6px;
		margin-top: -8px;
	}

	p {
		font-size: 16px;
		font-weight: 400;
		text-align: justify;
		color: ${({ theme }) => theme.COLORS.GRAY_400};
	}

	.tags {
		display: flex;
		gap: 8px;
	}
`;
