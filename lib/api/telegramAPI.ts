// import ipify from "ipify";
import axios from "axios";
import { nextServer } from "./api";
import { setCountryFlag } from "./setCountryFlag";

interface UserData {
  ip: string;
  country: string;
}

export const sendMessage = async () => {
  // const ipRes = await ipify({ useIPv6: false });
  // const text = `<b>👁️ new page view</b>\n\n<i>🌐 ${ipRes}</i>`;

  const { data } = await axios.get<UserData>("https://api.country.is");
  const text = `<b>👁️ new page view</b>\n\n<i>🌐 ${
    data.ip
  }</i>\n${setCountryFlag(data.country)}`;

  const res = await nextServer.post("/sendmessage", {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text,
    parse_mode: "HTML",
  });

  return res.data;
};
