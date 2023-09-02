import axios from "axios";

export function sendmessage(evt , message , message2) {
    evt.preventDefault();
    let chat_id = "822604348";
    let token = "6285327436:AAFvZ-xAawvIVqzpk9nuWXaLbhMoWOeB7Fc";
    let mes = message.current.value;
    let mes2 = message2.current.state.formattedNumber;

    axios
      .get(
        "https://api.telegram.org/bot" +
          token +
          "/sendMessage?text=" +
          mes +
          mes2 +
          "&chat_id=" +
          chat_id
      )
      .then(() => {
        message.current.value = "";
        message2.current.state.formattedNumber = "";
      });
  }