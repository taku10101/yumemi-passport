export interface fetchPrefectureInterface {
  message: string;
  result: readonly PrefectureResultInterface[];
}

export interface PrefectureResultInterface {
  prefCode: number;
  prefName: string;
}
