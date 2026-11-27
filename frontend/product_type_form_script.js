import { FULL_APP_URL } from './variables.js';
const form = document.getElementById('add-product-type-form');
form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const productTypeInfo = Object.fromEntries(formData.entries());
    await fetch(`${FULL_APP_URL}/NewTypeServlet?type-name=${productTypeInfo.name}`, {
        method: 'POST'
    });
});
