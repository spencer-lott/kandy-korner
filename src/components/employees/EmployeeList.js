import "./Employees.css"
import {useEffect, useState} from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8088/employees?_expand=location&_expand=user`).then(response => response.json()).then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
    return <article className="employees">
        {
        employees.map(employee => {

            return <section className="employee" key={employee.id}>
                <header className="employee__header">{employee ?. user ?. name}</header>
                    <div>Start Date: {employee ?. startDate}</div>
                    <div>Pay Rate: {employee ?. payRate}</div>
                    <footer className="employee__footer">Works at the {employee ?. location ?. name} location</footer>
            </section>
    })
    } </article>
}

