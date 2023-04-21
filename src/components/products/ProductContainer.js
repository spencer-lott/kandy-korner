import { useState } from "react"
import { KandySearch } from "../customers/KandySearch"
import { FindKandyList } from "../customers/FindKandyList"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FindKandyList searchTermState={searchTerms} />
        <KandySearch setterFunction={setSearchTerms}/>  
    </>
}