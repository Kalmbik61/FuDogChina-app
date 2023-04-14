import axios from "axios";
import { TG_BOT_TOKEN } from "../config";

class Tg_Sender {
  private readonly chatId: number;
  private readonly url: string;

  constructor() {
    this.chatId = -833553813;
    this.url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
  }

  async sendMessage(message: string): Promise<boolean> {
    try {
      const telegramResponse = await axios.post(this.url, {
        chat_id: this.chatId,
        text: message,
      });
      return telegramResponse.data.ok;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

const tgSender = new Tg_Sender();

export default tgSender;
