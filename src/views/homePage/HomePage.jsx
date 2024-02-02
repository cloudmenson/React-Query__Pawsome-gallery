import React from "react";

import DogGallery from "../../components/dog-gallery/DogGallery.jsx";

import * as Styles from "./styles.js";

const HomePage = () => {
  return (
    <Styles.Container>
      <DogGallery />
    </Styles.Container>
  );
};

export default HomePage;
