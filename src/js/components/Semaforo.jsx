import React, { useState } from "react";

const Semaforo = () => {
    
    const [color, setColor] = useState("red"); 

    return (
        <div className="container-fluid d-flex flex-column align-items-center mt-5">
            
            <div className="bg-dark" style={{ width: "10px", height: "50px" }}></div>
            
            
            <div className="bg-dark p-3 rounded-5 d-flex flex-column gap-3 shadow-lg"
                style={{ width: "100px" }}>

                <div
                    onClick={() => setColor("red")}
                    className={"rounded-circle " + (color === "red" ? "bg-danger shadow-red" : "bg-danger opacity-25")}
                    style={{ width: "70px", height: "70px", cursor: "pointer" }}
                ></div>

                <div
                    onClick={() => setColor("yellow")}
                    className={"rounded-circle " + (color === "yellow" ? "bg-warning shadow-yellow" : "bg-warning opacity-25")}
                    style={{ width: "70px", height: "70px", cursor: "pointer" }}
                ></div>

                <div
                    onClick={() => setColor("green")}
                    className={"rounded-circle " + (color === "green" ? "bg-success shadow-green" : "bg-success opacity-25")}
                    style={{ width: "70px", height: "70px", cursor: "pointer" }}
                ></div>
            </div>
        </div>
    );
}

export default Semaforo;