import axios from "axios";
import { ChatFormData } from "../_types/form-data";

export const postChatRoom = async (payload: ChatFormData) => {
  return await axios({
    method: "POST",
    url: "/api/chat-room/create",
    data: payload,
  }).then((res) => res.data);
};
