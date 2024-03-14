import { useContext } from "react";

import { prefectureContext } from "@/store/prefectureContext";

export const PrefectureList: React.FC = () => {
  const prefectureData = useContext(prefectureContext);
  console.log(prefectureData);
  return <div></div>;
};
