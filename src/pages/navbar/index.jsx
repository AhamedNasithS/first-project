import React from "react"
import Navigation from "./component/navbar"

export default function Navbar() {
    let [open,setOpen]= React.useState(false);
    return (
        <div>
            <Navigation setOpen={setOpen} open={open}/>
        </div>
    )
}