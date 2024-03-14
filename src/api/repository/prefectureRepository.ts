import type { fetchPrefectureInterface } from "@/api/apiInterface/prefectureInterface";

export const fetchPrefectures = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/prefectures`, {
      headers: {
        header: process.env.NEXT_PUBLIC_API_KEY || "",
      },
    });
    if (!response.ok) {
      throw new Error("APIエラー");
    }

    const data = (await response.json()) as fetchPrefectureInterface;
    return data.result;
  } catch (error) {
    console.error(error);
  }
};
