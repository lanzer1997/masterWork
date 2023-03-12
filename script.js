const citySelect = (e) => {
  document.getElementById("selectedCityAddress").innerHTML=e.target.value;
};
const submitForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value
    const number = document.getElementById("numberInput").value
       let tg = {
         token: "5962519099:AAFfb1V1VxgW2yLATY45fbNdREanaqibof8",
         chat_id: "594444216",
       };
       const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; 
       const obj = {
         chat_id: tg.chat_id, 
         text: "Имя: \n" + name + "\n" + "Номер телефона:\n" + number,
       };
       const xht = new XMLHttpRequest();
       xht.open("POST", url, true);
       xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
    alert('Ваша заявка принята')
}