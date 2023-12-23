import React, { useEffect, useRef, useState } from "react";
import { StopWatchStore } from "../Zustand/StopWatchStore";

const StopWatch = () => {
    const [start, setStart] = useState(false);
    const [milisec, setMilisec] = useState(0);
    const [pause, setPause] = useState(false);

    const timeLap = StopWatchStore((state) => state.timeLap);
    const addLap = StopWatchStore((state) => state.addLap);
    const resetLap = StopWatchStore((state) => state.resetLap);
    let count =0;

    const bottomlap = useRef(null);



    useEffect(() => { 
        let interval = null;
        if (start && !pause) {
            interval = setInterval(() => {
                setMilisec((milisec) => milisec + 10);

            }, 10)

        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [start, pause])

    const scrollTobottom= () => {
        bottomlap.current.scrollIntoView({behavior: 'smooth'})
    }

    const addLapHandler = () => {
        let date = new Date()
        let lap = {
            lap: milisec,
            time: date.toLocaleTimeString()
        }
        addLap(lap);
        scrollTobottom();
    }





    return (
        <>
            <div className="bg-gray-200 h-screen w-full flex flex-col items-center justify-center">
                <div className="bg-gray-400 flex flex-col   p-6 h-3/6 ">


                    <div className="  bg-white my-3 text-6xl text-center py-4 min-w-96">
                        {("0" + Math.floor((milisec / 3600000)) ).slice(-2)}:
                        {("0" + Math.floor((milisec / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((milisec / 1000) % 60)).slice(-2)}:

                        {("0" + ((milisec / 10) % 100)).slice(-2)}

                    </div>


                    <div className="flex flex-row my-3 h-full  ">
                        <div className="w-36">
                            <div className=" m-2 bg-red-300 ">
                                <button onClick={() => { start ? setPause(!pause) : setStart(!start) }}
                                    className="text-xl text-center px-3 py-2 w-full">{start ? (pause ? 'Resume' : "Pause") : 'Start'}</button>
                            </div>
                            <div className=" m-2 bg-red-300">
                                <button onClick={()=>{addLapHandler()}}
                                    className="text-xl  text-center px-3 py-2 w-full">Lap</button>
                            </div>
                            <div className="m-2 bg-red-300">
                                <button onClick={() => { setPause(false); setStart(false); setMilisec(0); resetLap() }}
                                    className="text-xl  text-center px-3 py-2 w-full"> Reset</button>
                            </div>
                        </div>


                        <div className="h-44 ml-8 overflow-scroll overflow-hidden overflow-x-hidden custom-scroll" >



                            {
                                timeLap.map((lap) => {
                                    return (
                                        <>
                                            <div className="flex flex-row justify-items-end ">
                                                <div className="px-2">{++count}</div>
                                                <div className="px-2">{("0" + Math.floor((lap.lap / 60000) % 60)).slice(-2)}:
                                                    {("0" + Math.floor((lap.lap / 1000) % 60)).slice(-2)}:

                                                    {("0" + ((lap.lap / 10) % 100)).slice(-2)}</div>
                                                <div className="pl-2">{lap.time}</div>
                                            </div>
                                            

                                        </>
                                    )

                                }
                                )
                            }
                            <div className="h-5 w-full border-b-gray-500 border-b-2" ref={bottomlap}></div>
                        </div>



                    </div>


                </div>

            </div>
        </>
    )
}

export default StopWatch;