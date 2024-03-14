import type { fetchPrefectureInterface } from "@/api/apiInterface/prefectureInterface";

export const fetchPrefectures = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/prefectures`, {
      headers: {
        "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Repository Error");
    }

    const data = (await response.json()) as fetchPrefectureInterface;
    console.log(data);
    return data.result;
  } catch (error) {
    console.error(error);
  }
};
