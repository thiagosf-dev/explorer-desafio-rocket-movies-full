/* eslint-disable react/prop-types */

import { Container } from "./style";

export function Tag({ title, ...props }) {
	return <Container {...props}>{title}</Container>;
}
