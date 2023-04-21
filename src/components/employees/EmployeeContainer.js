import { useEffect, useState } from "react"
import { EmployeeList } from "./EmployeeList"
import { EmployeeHireForm } from "./EmployeeHireForm"

export const EmployeeContainer = () => {

    const [employee, setEmployees] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8088/employees?_expand=user`)
        .then(r => r.json())
        .then(returnedEmployee => setEmployees(returnedEmployee))
      },[])
    

    return <>
        <EmployeeHireForm setterFunctionToUpdateEmployees={setEmployees}/>  
        <EmployeeList searchTermState={employee} />
    </>
}