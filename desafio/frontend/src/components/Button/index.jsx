/* eslint-disable react/prop-types */

import { Container } from "./styles";

export function Button({ loading = false, title = "BUTTON", ...props }) {
	return (
		<Container type="button" disabled={loading} {...props}>
			{loading ? "Carregando..." : title}
		</Container>
	);
}
