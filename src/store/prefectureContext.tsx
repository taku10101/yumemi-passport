import { createContext } from "react";

import { PrefectureResultInterface } from "@/api/apiInterface/prefectureInterface";
import { usePrefectures } from "@/api/service/usePrefectureService";

export const prefectureContext = createContext([] as readonly PrefectureResultInterface[]);

export const PrefectureProvider = ({ children }: { children: React.ReactNode }) => {
  const prefectureData = usePrefectures();

  return <prefectureContext.Provider value={prefectureData}>{children}</prefectureContext.Provider>;
};
