import axios from "axios";

export default async (url, token) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });

  return response.data.data;
};
