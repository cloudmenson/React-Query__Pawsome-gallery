import { fetchData } from "../dogDataFetcher.js";

export const fetchDataArray = async (url, parser, count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const result = await fetchData(url, parser);
    dataArray.push(result);
  }

  return dataArray;
};
