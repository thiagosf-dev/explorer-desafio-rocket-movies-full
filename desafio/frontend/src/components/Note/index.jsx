/* eslint-disable react/prop-types */
import { Tag } from "./../Tag/index";
import { Container } from "./styles";

export function Note({ data, ...props }) {
	const { tags = [], title = "" } = data;

	return (
		<Container {...props}>
			<h1>{title}</h1>

			{tags && (
				<footer>
					{tags.map((tag) => (
						<Tag key={tag.id} title={tag.name} />
					))}
				</footer>
			)}
		</Container>
	);
}
