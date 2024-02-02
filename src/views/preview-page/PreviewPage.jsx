import React from "react";

import Link from "../../components/link/Link.jsx";

import * as Styles from "./styles";

const PreviewPage = () => {
  return (
    <Styles.Container>
      <Styles.TitleH1>Сайт з cобаками і фактами про них</Styles.TitleH1>

      <Link to={"/home"} text="Перейти на головну" />
    </Styles.Container>
  );
};

export default PreviewPage;
