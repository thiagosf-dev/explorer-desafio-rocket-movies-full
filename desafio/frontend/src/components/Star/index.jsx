/* eslint-disable react/prop-types */

import { Container } from "./styles";

import fillStar from "./../../assets/fill_star.svg";
import star from "./../../assets/star.svg";

export function Star({ isFilled = false }) {
	return <Container src={isFilled ? fillStar : star}></Container>;
}
