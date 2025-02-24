const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const miniHeader = document.createElement("h3");
miniHeader.style.color = "blue";
miniHeader.textContent = "I'm a blue h3!";

container.appendChild(miniHeader);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "background-color: pink; border-style: solid; border-color: black;");

const newMainHeader = document.createElement("h1");
newMainHeader.textContent = "I'm in a div";

const newP = document.createElement("p");
newP.textContent = "ME TOO!";

newDiv.appendChild(newMainHeader);
newDiv.appendChild(newP);

container.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const secondBtn = document.querySelector("#secondBtn");
secondBtn.addEventListener("click", () => {
    alert("Hello World");
});

const newBtn = document.createElement("button");
newBtn.setAttribute("id", "newBtn");
newBtn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
newBtn.textContent = "EEEEEE";

container.appendChild(newBtn);