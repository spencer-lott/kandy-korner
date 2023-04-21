import { useEffect, useState } from "react"
import { LocationSelect } from "../locations/LocationsSelect"


export const EmployeeHireForm = ({setterFunctionToUpdateEmployees}) => {
    
    const [user, updateUser] = useState({
        name: "",
        email: "",
    })

    const [employee, updateEmployees] = useState({
        locationId: "",
        startDate: "",
        payRate: "",
        userId: 0
    })
   
    const [userArray, setUserArray] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8088/users`)
        .then(r => r.json())
        .then(yomama => setUserArray(yomama))
      },[])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const newUserId = userArray.length + 1

        const newUser = {
            id: newUserId,
            name: user.name,
            email: user.email,
            isStaff: true

        }
        const newEmployee ={                         
            locationId: +employee.locationId,
            startDate: new Date().toISOString().split('T')[0],
            payRate: +employee.payRate,
            userId: +newUserId
        }

        fetch (`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }) 
        fetch (`http://localhost:8088/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEmployee),
            })
        }

    const inputOnChangeEmployee = (event) => {

        const copy = {...employee}
    
            copy[`${event.target.name}`] = event.target.value
    
            updateEmployees(copy)
    }

    const inputOnChangeUser = (event) => {

        const copy = {...user}
    
            copy[`${event.target.name}`] = event.target.value
    
            updateUser(copy)
    }

    
    

return (<>

<form className="employeeForm"
        onSubmit={handleSaveButtonClick}>
            <h2 className="employeeForm__title">Add a person</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">name: </label>
                    <input
                    name="name"
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="type a name here ..."
                        value={user.name}
                         onChange={inputOnChangeUser} 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">email: </label>
                    <input
                    name="email"
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="type an email here ..."
                        value={user.email}
                         onChange={inputOnChangeUser} 
                        />
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">start date: </label>
                    <input
                    name="startDate"
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={employee.startDate}
                         onChange={inputOnChangeEmployee} 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">pay rate: </label>
                    <input
                    name="payRate"
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="0"
                        value={employee.payRate}
                         onChange={inputOnChangeEmployee} 
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Select your sign: </label>
                    <LocationSelect  getId={inputOnChangeEmployee}/>
                </div>
            </fieldset>

            <button className="btn btn-primary">
                Submit new employee
            </button>

            </form>


</>)


}