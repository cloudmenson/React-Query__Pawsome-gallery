import React from "react";

import * as Styles from "./styles.js";

const Button = ({ text, onClick }) => {
  return <Styles.Button onClick={onClick}>{text}</Styles.Button>;
};

export default Button;
