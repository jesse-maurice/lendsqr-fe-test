import {
  getItem,
  setItem,
} from '../utils/indexedDB';

interface ApiData {
  id: string;
  description: string;
  published: string;
  title: string;
  url: string;
}

export const fetchDataFromApi = async (): Promise<ApiData[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/c2d082f7-f8aa-4495-af3f-34be535dfff7"
  );
  const data = await response.json();
  await setItem("mockData", data);
  return data;
};

export const getStoredData = async (): Promise<ApiData[] | undefined> => {
  const data = await getItem<ApiData[]>("mockData");
  return data;
};
