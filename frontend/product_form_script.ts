import {FULL_APP_URL} from './variables.js'

interface Brand {
    id: number,
    name: string
}

interface ProductType{
    id: number,
    name: string
}

interface Product{
    name: string,
    flavor: string,
    brandId: number,
    typeId: number,
    measurement: 'units' | 'grams' | 'package'
}

const form = document.getElementById('form') as HTMLFormElement
const brandSelect = document.getElementById('brand-select')
const productTypeSelect = document.getElementById('product-type-select')

async function getBrands(): Promise<Brand[]>{
    const response = await fetch(`${FULL_APP_URL}/ShowBrandsServlet`)

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    }

    const brands: Brand[] = await response.json()

    return brands
}

async function getProductTypes(): Promise<ProductType[]>{
    const response = await fetch(`${FULL_APP_URL}/ShowProductTypesServlet`)

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    }

    const productTypes: ProductType[] = await response.json()

    return productTypes
}

async function showAllBrands(){
    const allBrands = await getBrands()
    let option: HTMLOptionElement
    
    for(let brand of allBrands){
        option = document.createElement('option')
        option.setAttribute('value',`${brand.id}`)
        option.textContent = brand.name

        brandSelect?.appendChild(option)
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

async function showAllProductTypes(){
    const allProductTypes = await getProductTypes()

    let option: HTMLOptionElement

    for(let type of allProductTypes){
        option = document.createElement('option')
        option.setAttribute('value', `${type.id}`)
        option.textContent = type.name

        productTypeSelect?.appendChild(option)
    }
}

showAllBrands()
showAllProductTypes()

form?.addEventListener("submit", async(event)=>{
    event.preventDefault()

    const formData = new FormData(form)

    const productInfo = Object.fromEntries(formData.entries())

    console.log(productInfo)

    await fetch(`${FULL_APP_URL}/NewProductServlet?name=${productInfo.name}&flavour=${productInfo.flavor}&brand-id=${productInfo.brand}&product-type-id=${productInfo.type}&measurement=${productInfo.measurement}`,
        {
            method: "POST"
        }
    )
    
})

// Rellenar el Select de tipos de producto

