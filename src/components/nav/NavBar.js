import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
        //Return Employee views

        return <EmployeeNav />
    }
    else {
        //Return Customer views

        return <CustomerNav />
    }
}

