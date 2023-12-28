/* eslint-disable react/prop-types */

import { Container } from "./styles";

export function Textarea({ value = ``, onchange, ...props }) {
  return (
    <Container
      defaultValue={``}
      value={value}
      onChange={onchange}
      {...props}
    ></Container>
  );
}
