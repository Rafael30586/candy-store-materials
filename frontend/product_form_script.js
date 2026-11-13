"use strict";
const domainUrl = 'http://localhost:8080/candy-store-app';
const form = document.getElementById('form');
async function getBrands() {
    const response = await fetch('/brands');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const brands = await response.json();
    return brands;
}
async function getProductTypes() {
    const response = await fetch('/product-types');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const productTypes = await response.json();
    return productTypes;
}
form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const productInfo = Object.fromEntries(formData.entries());
    console.log(productInfo);
    await fetch(`${domainUrl}/NewProductServlet?name=${productInfo.name}&flavour=${productInfo.flavor}&brand-id=${productInfo.brand}&product-type-id=${productInfo.type}&measurement=${productInfo.measurement}`, {
        method: "POST"
    });
});
