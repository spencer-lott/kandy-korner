import {useState} from "react"

export const Types = ({types, product, selectList}) => {


    return (
        <>
            <select id="type"
                value={
                    product.productTypeId
                }
                onChange={
                    event => selectList(event)
            }>
                <option value="0">Select a candy type</option>

                {
                types.map(type => {
                    return <option key={
                            type.id
                        }
                        value={
                            type.id
                    }>
                        {
                        type.name
                    }</option>
            })
            } </select>
        </>
    )
}
