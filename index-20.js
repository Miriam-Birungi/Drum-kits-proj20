const kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container")

kits.forEach(kit=>{
    const btnEl = document.createElement("button");
    // used to create a class in javascript
    btnEl.classList.add("btn");
    // used to add text
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".jpeg)"
    containerEl.appendChild(btnEl);
})