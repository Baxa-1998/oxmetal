import axios from "axios";
import { checkCookie } from "./functions";

export function sendmessage(evt, message, message2) {
  evt.preventDefault();
  
  let mes = message.current.value;
  let mes2 = message2.current.state.formattedNumber;
  let obj = {
    name:mes,
    tel:mes2
  }
  
  // Проверяем наличие cookie с именем 'myCookie'
  if (checkCookie("ChangeForm")) {
    // console.log('Cookie "myCookie" существует.');
    // let form = document.querySelectorAll(".form-control");
    // form.forEach((i) => {
    //   i.value = "+998";
    // });
    // message.current.value = "";
    // message2.current.state.formattedNumber = "+998";
  } else {
    if (mes.length > 0 && mes2.length > 0) {
      const now = new Date();
      const time = now.getTime();
      const expireTime = time + 1 * 60 * 1000; // 10 минут в миллисекундах
      now.setTime(expireTime);
      document.cookie = `ChangeForm=ChangeForm; expires=${now.toUTCString()}; path=/`;
      axios
        .post(
          'https://oxmetall-9aef2-default-rtdb.europe-west1.firebasedatabase.app/arr.json',obj
        )
        .then(() => {
          let form = document.querySelectorAll(".form-control");
          setTimeout(() => {
            form.forEach((i) => {
              i.value = "+998";
            });
            message.current.value = "";
            message2.current.state.formattedNumber = "+998";
          }, 1000);
        });
    }
  }
}
