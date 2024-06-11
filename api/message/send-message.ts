import axios from "axios";

export const sendMessage = async (message: string) => {
  return await axios({
    method: "POST",
    url: "/api/message",
    data: {
      message,
    },
  }).then((res) => res.data);
};
