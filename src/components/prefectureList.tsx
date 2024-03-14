import React, { useContext } from "react";

import { PrefectureResultInterface } from "@/api/apiInterface/prefectureInterface";
import { CheckBoxField } from "@/form/checkBoxField";
import { prefectureContext } from "@/store/prefectureContext";

export const PrefectureDataDisplay: React.FC = () => {
  const prefectureData = useContext(prefectureContext);

  return (
    <div>
      {prefectureData &&
        prefectureData.map((prefecture: PrefectureResultInterface, index: number) => (
          <div key={index}>
            <CheckBoxField name={prefecture.prefName} />
          </div>
        ))}
    </div>
  );
};
