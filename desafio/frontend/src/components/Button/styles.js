import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	height: 56px;
	border: 0;
	padding: 16px 14px;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 500;
	background-color: ${({ theme }) => theme.COLORS.GRAY_100};
	color: ${({ theme }) => theme.COLORS.BLACK_600};

	&:hover {
		opacity: 0.5;
	}
`;
