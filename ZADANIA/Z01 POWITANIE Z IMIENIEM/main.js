document.addEventListener("DOMContentLoaded", () => {})
const button =
document.querySelector("button");
const input =
    document.querySelector("#imie");
const wynik =
    document.querySelector("#wynik");
button.addEventListener("click",function () {
    const imie = input.value.trim();
    if (imie) {
        wynik.textContent = "Witaj " + imie + "!!!!!" + "Miło, że jesteś na naszej stronie";}
    else {wynik.textContent = "Proszę Podać imię";}
});