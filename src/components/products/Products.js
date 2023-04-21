
export const Products = ({inventory}) => {

    return <>
    <section className="inventory">
                <header><b>{inventory.name}</b></header>
                <div>{inventory.pricePerUnit}</div>
                <div>{inventory.productType.name}</div>
                </section>
    </>
    
    
    }