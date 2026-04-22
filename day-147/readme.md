# day-147 today we have to implement the second part seller can see the product created by him/her 
- in yesterdays class we learn about how developer actually works 
- in which we have to work on two things creating a api and make api protected in api response those project seller creating those only sent in api response  if we break the api then api has two parts first part is creating a routes using get api= /api/products/seller and second part is create controllers controller fecth all the seller products and give us 
lets start with create get api so we done with this user fetched successfully now we have to build frontend fro this 

- in frontend i have to create two pages 
problem statement: we have to create two pages which is only accessessable by seller first is create product page and second is view all created products 
- this is our problem statement we have to work on this problem statement 

- so i am breaking this into three parts 
1) create product page
2) view products
3) make pages protected
4) manage product state
5) integrate backend api

so fistlly we are integrating api firstlly for that we have to create
features/products/service/product.api.js and second task which needs to perform in it is create functions to interact with api 
- features/products/service/product.api.js done with this part next
- create functions to interact with api 
- if your in frontend folder then u need one thing called axios we firstlly importing axios 

then creating a function 
- const productApiInstance = axios.create({
    baseURL: "/api/products",
    withCredentials: true
})

we have to create two functions mainly here and those two functions are 
1) function for creating a product
2) function for getting seller products 
for user creeating a products and watching a created products 

we created function next 
1) function for creating a product
export async function createProduct(formData){
    const response = await productApiInstance.post("/", formData)
    return response.data
}

after that created next function 
2) function for getting seller products
export async function getSellerProduct() {
    const response = await productApiInstance.get("/seller", )
    return response.data
}
so here our api integration part is done 

now we are focussing on how data we are storing 

we have to create product state here 
we have to share how is the structure of products and code structure and after file storing we have to use it into the auth


MANAGE PRODUCT STATE
in this we devided this into two parts
1) create product slice
2) use product slice in store 

1) create product slice
- for creating a product slice we have to create a file 
- file path is : /features/products/state/product.slice.js
- donw with creating this part 

2) use product slice in store 
- now we are using stored slice in our store
in app folder importing productReducer and ceate it 
- done with this part 
completed whole manage product part 

so managing this two we need hook layer 
-create product hook 
1) import all the function
2) create functions handleCreateProduct, handleGetSellerProduct

1) import all the function
- we have to create hook folder in which use.Product.js file
done with importing

2) create functions handleCreateProduct,handleGetSellerProduct

import { createProduct, getSellerProduct } from "../services/product.api"
import {useDispatch} from "react-redux"
import { setSellerProducts } from "../state/product.slice"



export const useProduct = () => {

    const dispatch =  useDispatch()

    async function handleCreateProduct(formData) {
        const data = await createProduct(formData)
        return data.product
    }

    async function handleGetSellerProduct() {
        const data = await getSellerProduct()
        dispatch(setSellerProducts(data.product))
        return data.products
    }

    return {handleCreateProduct, handleGetSellerProduct}

}

completed created two function and here hook part is completed 

# create product page 
now we are creating a pages 
- we have to create pages folder
/features/products/pages/create.Product.jsx
- we have to design a ui now with using a hook

created a page and connected with backend 