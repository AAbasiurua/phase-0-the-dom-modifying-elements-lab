main.remove(); 
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "<h1>Bob is the champion</h1>";

const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

  element.append(ul);

// const element = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";

// element.textContent = "You've changed what's on the screen!";