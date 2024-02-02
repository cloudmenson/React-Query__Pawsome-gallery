import React from "react";

import * as Styles from "./styles.js";

const Link = ({ to, text }) => {
  return <Styles.Link to={to}>{text}</Styles.Link>;
};

export default Link;
