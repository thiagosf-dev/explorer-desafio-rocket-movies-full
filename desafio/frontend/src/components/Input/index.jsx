/* eslint-disable react/prop-types */

import { Container } from "./styles";

export function Input({ icon: Icon, ...props }) {
	return (
		<Container>
			{Icon && <Icon sise={20} />}
			<input {...props} />
		</Container>
	);
}
