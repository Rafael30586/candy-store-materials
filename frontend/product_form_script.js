"use strict";
const addProductButton = document.getElementById("add-brand");
const form = document.getElementById("form");
const submitButtom = document.getElementById("submit-button");
const brandButtonContainer = document.getElementById("brand-button-container");
const addBrandButton = document.getElementById("add-brand-button");
function addBrandField(e) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const b = document.createElement("b");
    b.textContent = "Other brand";
    div.setAttribute("class", "mb-3");
    label.setAttribute("class", "form-label");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    label.appendChild(b);
    div.appendChild(label);
    div.appendChild(input);
    //submitButtom?.remove() // parece que esto no sirve
    // brandButtonContainer?.remove() // ni esto tampoco
    form?.insertBefore(div, brandButtonContainer);
    // form?.appendChild(brandButtonContainer)
    // averiguar si se puede hacer un app4end child en la posición que elijamos
    console.log(div);
}
addBrandButton?.addEventListener("click",(e)=>{
    e.preventDefault()
    addBrandField()
});
