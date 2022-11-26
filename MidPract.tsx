import React, {useEffect, useRef, useState } from "react";
import { Button, Grid } from "@mui/material";


export default function MidPract() {
    const colors = ["#e6194B", "#f58231", "#ffe119", "#bfef45", "#3cb44b", "#42d4f4", "#4363d8", "#911eb4", "#f032e6"]; // color sequence used in the game

    const [btnLabel, setBtnLabel] = useState("Start Roll") // Button trigger state
    const [refresher, setRefresher] = useState(Math.random()); // Loop refresher. this is a technique used to trigger re rendering of a component

    const rolling = useRef({ // Different variables needed in my solution. Uses ref to have persistence property
        isRolling: false, // Checks if Game is Rolling..
        index: 0, // Selected index every rolls
        stopped: false, // boolean to flag is rolling had just stopped
        count: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Array of counter for each color
        colors: ["#e6194B", "#f58231", "#ffe119", "#bfef45", "#3cb44b", "#42d4f4", "#4363d8", "#911eb4", "#f032e6"] // Default colors used...
    });

    useEffect(() => {
        let inter =
            setInterval(() => {
                if (rolling.current.isRolling) { // Check Rolling
                    for (var i = 0; i < 9; i++) { // Reset to Assingned Colors
                        rolling.current.colors[i] = colors[i]
                    }
                    rolling.current.index = Math.floor(Math.random() * 9) // Random selection of Grid
                    rolling.current.colors[rolling.current.index] = "#ddd"; // Change Color of selected grid
                    setRefresher(Math.random()); // Trigger refresh..
                    rolling.current.stopped = true; // Tell that rolling had just stopped
                }
                else {
                    if (rolling.current.stopped) { // Check if rolling had just stopped
                        rolling.current.count[rolling.current.index] = rolling.current.count[rolling.current.index] + 1; // Increment selected index color
                        rolling.current.stopped = false; // Reset 
                        setRefresher(Math.random()); // Trigger Refresh
                    }
                }
            }, 100);
        return () => { clearInterval(inter) }
    }, [])
    return (
        <>
            <div>
                {
                    colors.map((item, i) => {
                        return (
                            <span key={i} style={{ backgroundColor: item + "", color: '#fff', fontSize: '15px', display: 'inline-block', padding: '.5rem' }}>{rolling!.current!.count[i]}</span>
                        )
                    })
                }
                <br />
            </div>
            <Grid key={refresher} container sx={{ width: "300px" }}>
                {
                    rolling.current.colors.map((item, i)=>{ // Loop throught the color grid
                        return (
                            <Grid key={i} item lg={4} sx={{ height: '100px', verticalAlign: "middle", border: 'solid 2px #fff' }}>
                                <div style={{ width: "100%", height: "100%", backgroundColor: item }}>&nbsp;</div>
                            </Grid>
                        )
                        
                    })
                }
            </Grid>
            <Button variant="contained" onClick={
                () => {
                    if (btnLabel === "Start Roll") {
                        rolling.current.isRolling = true;
                        setBtnLabel("Stop Roll");
                    } else {
                        rolling.current.isRolling = false;
                        setBtnLabel("Start Roll");
                    }
                }
            }>{btnLabel}</Button>
        </>
    )
}