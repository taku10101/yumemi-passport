import { useEffect, useState } from "react";

import type { PrefectureResultInterface } from "@/api/apiInterface/prefectureInterface";
import { fetchPrefectures } from "@/api/repository/prefectureRepository";

export const usePrefectures = () => {
  const [data, setData] = useState<readonly PrefectureResultInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPrefectures();
        if (!response) {
          throw new Error("Service Error");
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
