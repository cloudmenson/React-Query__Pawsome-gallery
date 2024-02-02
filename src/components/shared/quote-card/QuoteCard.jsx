import React from "react";

import * as Styles from "./styles.js";

const QuoteCard = ({ src, title }) => {
  return (
    <Styles.QuoteCard>
      <Styles.Image src={src} alt={title} />

      <Styles.Title>{title}</Styles.Title>
    </Styles.QuoteCard>
  );
};

export default QuoteCard;
