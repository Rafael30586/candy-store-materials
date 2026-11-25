"use strict";
const domainUrl = 'http://localhost:8080/candy-store-app';
const form = document.getElementById('form');
const brandSelect = document.getElementById('brand-select');
const productTypeSelect = document.getElementById('product-type-select');
async function getBrands() {
    const response = await fetch(`${domainUrl}/ShowBrandsServlet`);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const brands = await response.json();
    return brands;
}
async function getProductTypes() {
    const response = await fetch(`${domainUrl}/ShowProductTypesServlet`);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const productTypes = await response.json();
    return productTypes;
}
async function showAllBrands() {
    const allBrands = await getBrands();
    let option;
    for (let brand of allBrands) {
        option = document.createElement('option');
        option.setAttribute('value', `${brand.id}`);
        option.textContent = brand.name;
        brandSelect?.appendChild(option);
    }
    /*
        option = document.createElement('option')
        const a = document.createElement('a')
        a.textContent = 'Add new brand'
        a.setAttribute('href','brand_form.html')
        option.appendChild(a)
        brandSelect?.appendChild(option)
    */
}
async function showAllProductTypes() {
    const allProductTypes = await getProductTypes();
    let option;
    for (let type of allProductTypes) {
        option = document.createElement('option');
        option.setAttribute('value', `${type.id}`);
        option.textContent = type.name;
        productTypeSelect?.appendChild(option);
    }
}
showAllBrands();
showAllProductTypes();
form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const productInfo = Object.fromEntries(formData.entries());
    console.log(productInfo);
    await fetch(`${domainUrl}/NewProductServlet?name=${productInfo.name}&flavour=${productInfo.flavor}&brand-id=${productInfo.brand}&product-type-id=${productInfo.type}&measurement=${productInfo.measurement}`, {
        method: "POST"
    });
});
// Rellenar el Select de tipos de producto
