import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { Types } from "./ProductTypes"

export const ProductForm = () => {
    const [product, update] = useState({name: "", pricePerUnit: 0, productTypeId: 0})
    const [filteredProductTypes, setFilteredProductTypes] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    const navigate = useNavigate()

    // Fetching api we need
    useEffect(() => {
        fetch(`http://localhost:8088/productTypes`).then(response => response.json()).then((productsArray) => {
            setFilteredProductTypes(productsArray)
        })
    }, [])

    // Sends our new changes to API
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            name: product.name,
            pricePerUnit: product.pricePerUnit,
            productTypeId: product.productTypeId
        }
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        }).then(response => response.json()).then(() => {
            navigate("/products")
        })
    }


    const selectList = (event) => {

        const copy = {...product}

            copy.productTypeId = event.target.value

            update(copy)
    }

    return (

        <form className="productForm">
            <h2 className="productForm__title">New Product</h2>
            <fieldset>
                <div className="productTypes">
                    <label htmlFor="productType">Product Type:</label>
                   
                    {<Types types={filteredProductTypes} product={product} selectList={selectList}/>}
           
                

                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="productName">Name:</label>
                    <input required autoFocus type="text" className="form-control" placeholder="name"
                        value={
                            product.name
                        }
                        onChange={
                            (event) => {
                                const copy = {
                                    ...product
                                }
                                copy.name = event.target.value
                                update(copy)
                            }
                        }/>
                </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="productPrice">Price:</label>
                <input required autoFocus type="number" className="form-control" placeholder="price"
                    value={
                        product.pricePerUnit
                    }
                    onChange={
                        (event) => {
                            const copy = {
                                ...product
                            }
                            copy.pricePerUnit = event.target.value
                            update(copy)
                        }
                    }/>
            </div>
    </fieldset>

    <button onClick={
            (clickEvent) => handleSaveButtonClick(clickEvent)
        }
        className="btn btn-primary">
        Submit Product
    </button>
</form>
    )

}
