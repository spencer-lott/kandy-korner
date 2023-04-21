import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/Locations"
import { ProductList } from "../products/ProductsList"
import { ProductContainer } from "../products/ProductContainer"



export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                <Route path="products" element={ <ProductList /> } />
                <Route path="find-candy" element={<ProductContainer />} />
                
            </Route>
        </Routes>
    )
}