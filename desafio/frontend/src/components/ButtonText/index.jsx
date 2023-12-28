/* eslint-disable react/prop-types */

import { Container } from "./styles";

export function ButtonText({ isActive = false, title, ...props }) {
	return (
		<Container $isactive={isActive.toString()} type="button" {...props}>
			{title}
		</Container>
	);
}
