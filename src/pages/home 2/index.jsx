import React from "react";
import Header from "./component/header";
import Project from "./component/header/project";
import Task from "./component/header/task";
import Chat from "./component/header/chat";
import One from "./component/header/one";
import Personalisation from "./component/header/personalization";
import Intelligence from "./component/header/intelligence";
import Integration from "./component/header/integration";

export default function Home() {
    return (
        <div className="bg-[#050A15]">
            <Header/>
            <Project/>
            <Task />
            <Chat/>
            <Intelligence/>
            <Personalisation/>
            <Integration/>
            <One/>
        </div>
    )
}