import {useEffect, useState} from "react"
import "./Products.css"
import {useNavigate} from "react-router-dom"
import {Products} from "./Products"

export const ProductList = ({searchTermState}) => { // This first one lets us see all the products
    const [products, setProduct] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [topPriced, setTopPriced] = useState(false)
    

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(() => {
        const searchedProducts = products.filter(product => {
            return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())}
            )
            setFiltered(searchedProducts)
    },[searchTermState]
    )

    // This is filtering the products and setting the filteredProducts array to the products that we filtered for
    useEffect(() => {
        if (kandyUserObject.staff && topPriced) {
            const result = products.filter(product => product.pricePerUnit >= 2)
            setFiltered(result)
        } else if (kandyUserObject.staff){
            setFiltered(products)

        } else {
            setFiltered([])
        }
    }, [topPriced, products])


    //Fetching api we need
    useEffect(() => {
        fetch(`http://localhost:8088/products?_expand=productType`).then(response => response.json()).then((productsArray) => {
            setProduct(productsArray)
        })
    }, [])


return <>
{   kandyUserObject.staff ? <>
    <button onClick={() => navigate("/product/create")}>Add New Product</button>
    <button onClick={() => setTopPriced(true)} className="topPriced">Top Priced</button>
    </>
    : <></>
}

      <h2>Available Products</h2>  
      <article className="products">
        {filteredProducts.map(inventory => {
            return <Products key={inventory.id} inventory={inventory}/>
        })}
      </article>
    </>
  }
