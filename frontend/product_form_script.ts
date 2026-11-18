const domainUrl = 'http://localhost:8080/candy-store-app'

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
    const response = await fetch(`${domainUrl}/ShowBrandsServlet`)

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    }

    const brands: Brand[] = await response.json()

    return brands
}

async function getProductTypes(): Promise<ProductType[]>{
    const response = await fetch(`${domainUrl}/ShowProductTypesServlet`)

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    }

    const productTypes = await response.json()

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

}

showAllBrands()

form?.addEventListener("submit", async(event)=>{
    event.preventDefault()

    const formData = new FormData(form)

    const productInfo = Object.fromEntries(formData.entries())

    console.log(productInfo)

    await fetch(`${domainUrl}/NewProductServlet?name=${productInfo.name}&flavour=${productInfo.flavor}&brand-id=${productInfo.brand}&product-type-id=${productInfo.type}&measurement=${productInfo.measurement}`,
        {
            method: "POST"
        }
    )
    
})

// Rellenar el Select de tipos de producto

