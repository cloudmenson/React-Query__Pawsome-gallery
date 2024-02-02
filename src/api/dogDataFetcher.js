import { useQuery } from "react-query";

import { fetchDataArray } from "./utils/dogDataMultiFetch.js";

export const fetchData = async (url, parser) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return parser(data);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const useDogFacts = () => {
  return useQuery(
    "dogFacts",
    () =>
      fetchDataArray(
        "https://dog-api.kinduff.com/api/facts",
        (data) => data.facts[0],
        10
      ),
    { refetchOnWindowFocus: false }
  );
};

export const useDogImages = () => {
  return useQuery(
    "dogImages",
    () =>
      fetchDataArray(
        "https://dog.ceo/api/breeds/image/random",
        (data) => data.message,
        10
      ),
    { refetchOnWindowFocus: false }
  );
};
