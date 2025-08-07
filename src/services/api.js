import axios from "axios";

const TIME_API_URL =
  "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta";

export const fetchWorldTime = async () => {
  try {
    const response = await axios.get(TIME_API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Gagal mengambil data waktu dari server.");
  }
};
