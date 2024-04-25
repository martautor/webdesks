import * as React from "react";
import MyPaper from "./mui/paper";
import '../app.css'

export default function Users() {
    return (
        <div className="users">
            <MyPaper text='1'/>
            <MyPaper text='2'/>
            <MyPaper text='3'/>
            <MyPaper text='4'/>
            <MyPaper text='5'/>
        </div>
    )
}