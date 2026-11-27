import { FULL_APP_URL } from './variables.js';
const form = document.getElementById('add-brand-form');
form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const brandInfo = Object.fromEntries(formData.entries());
    console.log("Añadiendo marca a la base de datos");
    await fetch(`${FULL_APP_URL}/NewBrandServlet?brand-name=${brandInfo.name}`, {
        method: 'POST'
    });
});
