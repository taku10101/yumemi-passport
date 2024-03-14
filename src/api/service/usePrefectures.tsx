import { useState } from "react";

import { fetchPrefectureInterface } from "@/api/apiInterface/prefectures";
import { fetchPrefectures } from "@/api/repository/prefectures";
export const usePrefectures = async () => {
  const [data, setData] = useState<fetchPrefectureInterface>();
  try {
    const response: fetchPrefectureInterface | undefined = await fetchPrefectures();
    if (!response) {
      throw new Error("Repository Error");
    }
    setData(response);
  } catch (error) {
    console.error(error);
  }

  return data;
};
