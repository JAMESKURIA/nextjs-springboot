"use client"
import {useState} from "react";
import axios from "axios";


export default function AboutPage(){
    const [count, setCount] = useState(0)



    function getGreeting() {
        axios.get("/api/v1/test/hello").then((res) => {
            console.log(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <h3>Hi dev</h3>
            <button onClick={() => setCount(prev  => prev + 1)}>Count {count}</button>

            <button className="bg-blue-500 p-4 rounded-lg mt-3" onClick={() => getGreeting()}>Get Greeting</button>
        </>
    )
}