

export const KandySearch = ({setterFunction}) => {
    return<><form className="findKandyForm">
    <fieldset>
        <div className="findKandys">
            <label htmlFor="findKandy"><b>What candy are you looking for?</b></label>
        </div>
        <div>
        <input 
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }


        }   
        type="text" placeholder="name of product"></input>
        </div>
    </fieldset>
    </form>

    </>
}





