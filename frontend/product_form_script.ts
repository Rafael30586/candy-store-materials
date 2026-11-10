const addProductButton = document.getElementById("add-brand")
const form = document.getElementById("form")
const submitButtom = document.getElementById("submit-button")
const brandButtonContainer = document.getElementById("brand-button-container")
const addBrandButton = document.getElementById("add-brand-button")
let brandInputQuantity = 1

function removeBrandField(){
    brandInputQuantity--
    const fieldWrapperToRemove = document.getElementById("brand-field-wrapper-"+brandInputQuantity)
    fieldWrapperToRemove?.remove()
}

function addBrandField() {

    if (brandInputQuantity >= 3) {
        return
    }

    const wrapDiv = document.createElement("div")
    const div = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const b = document.createElement("b")
    b.textContent = "Other brand"
    const removeBrandInputButton = document.createElement("button")
    removeBrandInputButton.textContent = '-'

    wrapDiv.setAttribute("class", "brand-field-wrapper")
    wrapDiv.setAttribute("id","brand-field-wrapper-"+brandInputQuantity)
    div.setAttribute("class", "mb-3")
    label.setAttribute("class", "form-label")
    input.setAttribute("type", "text")
    input.setAttribute("class", "form-control")
    removeBrandInputButton.setAttribute("class", "btn btn-secondary remove-brand-field-button")
    removeBrandInputButton.setAttribute("title", "remove the brand field")
    removeBrandInputButton.setAttribute("id","remove-brand-field-button")

    removeBrandInputButton.addEventListener("click",(e)=>{
        e.preventDefault()
        removeBrandField()
    })


    label.appendChild(b)
    div.appendChild(label)
    div.appendChild(input)
    wrapDiv.appendChild(div)
    wrapDiv.appendChild(removeBrandInputButton)

    //submitButtom?.remove() // parece que esto no sirve
    // brandButtonContainer?.remove() // ni esto tampoco

    form?.insertBefore(wrapDiv, brandButtonContainer)
    brandInputQuantity++
    // form?.appendChild(brandButtonContainer)
    // averiguar si se puede hacer un app4end child en la posición que elijamos
    // console.log(div)

}



addBrandButton?.addEventListener("click", (e) => {
    e.preventDefault()
    addBrandField()
})