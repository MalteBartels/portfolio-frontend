const container = document.querySelector("#container");
const text = document.querySelector("p");
const links = document.querySelectorAll("#links a");
const message = "Hier gibt es noch nichts zu sehen. Bitte gehen Sie weiter!";
const impressum_btn = document.querySelector("#impressum_btn");
const impressum_modal = document.querySelector("#impressum_modal");

container.classList.add("animate-fadein"); 

message.split('').forEach((el, i) => {
              setTimeout(() => 
              text.innerHTML += el
              , i*50 + Math.random(1)*50)
            });
const messageRenderTime = message.length*50;

links.forEach((el, i) => {
  setTimeout(() => 
            links[i].classList.add("animate-slidein"),
             (i*i)*75 + messageRenderTime);
});

impressum_btn.addEventListener("click", () => {
    impressum_modal.classList.add("active");
});

impressum_modal.addEventListener("click", () => {
    impressum_modal.classList.remove("active");
});
