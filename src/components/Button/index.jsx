import React from "react";
import "./styles.scss";

export default function Button(props) {
  const { text } = props;
  return <button data-testid="button">{text}</button>;
}
