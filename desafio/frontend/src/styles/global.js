import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	body {
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		color: ${({ theme }) => theme.COLORS.WHITE};
	}

	body, input, button, textarea, h1, h2 {
		font-family: 'Roboto Slab', serif;
		font-size: 16px;
		outline: none;
	}

	a {
		text-decoration: none;
	}

	a, button {
		cursor: pointer;
		transition: filter .2s;
	}

	a:hover, button:hover {
		filter: brightness(.9);
	}
`;
