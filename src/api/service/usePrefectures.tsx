import { useEffect, useState } from "react";

import { PrefectureResultInterface } from "@/api/apiInterface/prefectures";
import { fetchPrefectures } from "@/api/repository/prefectures";

export const usePrefectures = () => {
  const [data, setData] = useState<readonly PrefectureResultInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPrefectures();
        if (!response) {
          throw new Error("Repository Error");
        }
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchData();
  }, []);

  return data;
};
