const axios = require("axios");

let url =
  "https://www.costco.com.tw/Household-Pet-Supplies/Pet-Supplies/Other-Pet-Supplies/ARM-HAMMER-Double-Duty-Cat-Litter-1814kg/p/790216";

check();

function check() {
  console.log(new Date());
  axios
    .get(url)
    .then(response => {
      if (response.data.indexOf("js-add-to-cart") >= 0) {
        console.log("有貨");
        setInterval(() => {
          process.stdout.write("\x07");
        }, 3000);
      } else {
        console.log("沒貨");
        setTimeout(check, 10000);
      }
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {});
}
