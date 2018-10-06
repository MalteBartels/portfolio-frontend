const container = document.querySelector("#container");
const text = document.querySelector("p");
const links = document.querySelectorAll("#links a");
const message = "Hier gibt es noch nichts zu sehen. Bitte gehen Sie weiter!";

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
