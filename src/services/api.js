import axios from "axios";

const WORLD_TIME_API_URL = "http://worldtimeapi.org/api/timezone/Asia/Jakarta";

export const fetchWorldTime = async () => {
  try {
    const response = await axios.get(WORLD_TIME_API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Gagal mengambil data waktu dari server.");
  }
};
