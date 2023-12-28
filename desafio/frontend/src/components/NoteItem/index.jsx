/* eslint-disable react/prop-types */

import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({
  isNew = false,
  value = ``,
  onClick,
  onChange,
  ...props
}) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={onChange}
        {...props}
      />

      <button
        className={isNew ? `button-add` : `button-delete`}
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
