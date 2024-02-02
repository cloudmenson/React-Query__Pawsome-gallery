import React from "react";

import Loader from "../loader/Loader.jsx";
import Button from "../button/Button.jsx";
import QuoteCard from "../shared/quote-card/QuoteCard.jsx";
import { useDogFacts, useDogImages } from "../../api/dogDataFetcher.js";

import * as Styles from "./styles.js";

const DogGallery = () => {
  const {
    data: imgData,
    isError: imgError,
    isLoading: imgLoading,
    refetch: refetchImages,
  } = useDogImages();

  const {
    data: factData,
    isError: factError,
    isLoading: factLoading,
    refetch: refetchFacts,
  } = useDogFacts();

  const handleRefresh = () => {
    refetchImages();
    refetchFacts();
  };

  if (imgLoading || factLoading) {
    return <Loader text="Завантаження..." />;
  }

  if (imgError || factError) {
    return (
      <Loader text="Не можу отримати інформацію, спробуйте перезавантажити сторінку." />
    );
  }

  const quoteCards = imgData?.map((img, index) => {
    return <QuoteCard src={img} key={index} title={factData[index]} />;
  });

  return (
    <Styles.Container>
      <Styles.ContentWrapper>{quoteCards}</Styles.ContentWrapper>

      <Styles.StyledBtn>
        <Button onClick={handleRefresh} text="Оновити" />
      </Styles.StyledBtn>
    </Styles.Container>
  );
};

export default DogGallery;
