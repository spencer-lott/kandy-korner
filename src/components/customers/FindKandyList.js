import {useEffect, useState} from "react"



export const FindKandyList = ({searchTermState}) => {
    const [products, setProduct] = useState([])
    const [filteredProducts, setFiltered] = useState([])


    useEffect(() => {
        const searchedProducts = products.filter(product => {
            return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setFiltered(searchedProducts)
    }, [searchTermState])


    useEffect(() => {
        fetch(`http://localhost:8088/products?_sort=name_order=asc`).then(response => response.json()).then((productsArray) => {
            setProduct(productsArray)
        })
    }, [])


    return <> {
        searchTermState ? <>
            <h2>List of Products</h2>
            <article className="products">
                {
                filteredProducts.map((product) => {
                    return <section className="location"
                        key={
                            `product--${
                                product.id
                            }`
                    }>
                        <header>{
                            product.name
                        } </header>
                        <footer>${
                            product.pricePerUnit
                        }</footer>
                    </section>
            })
            } </article>
        </> : <></>
    } </>

}
