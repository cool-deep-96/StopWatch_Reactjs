import soundClick from '../assets/Sounds/ui-click-43196.mp3'
import React, { useEffect, useRef, useState } from "react";
import { StopWatchStore } from "../Zustand/StopWatchStore";
import About from "./About";
import useSound from "use-sound";;



const StopWatch = () => {
    const [start, setStart] = useState(false);
    const [milisec, setMilisec] = useState(0);
    const [pause, setPause] = useState(false);
    const [play] = useSound(soundClick)

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
            <div className="bg-gray-200  h-screen lg:h-screen w-full flex flex-col items-center justify-center">
                <div className="bg-gray-400 min-h-max flex flex-col w-11/12 lg:w-4/12 p-3 lg:p-6 h-3/6 ">


                    <div className="  bg-white my-3 text-5xl lg:text-6xl text-center py-4 lg:min-w-96">
                        {("0" + Math.floor((milisec / 3600000)) ).slice(-2)}:
                        {("0" + Math.floor((milisec / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((milisec / 1000) % 60)).slice(-2)}:

                        {("0" + ((milisec / 10) % 100)).slice(-2)}

                    </div>


                    <div className="flex flex-row my-6 lg:my-3 h-full  ">
                        <div className="lg:w-36 w-20">
                            <div className=" my-4 lg:m-2 bg-red-300 ">
                                <button onClick={() => { start ? setPause(!pause) : setStart(!start); play() }}
                                    className="text-lg font-semibold text-center px-3 py-3 lg:py-2 w-full">{start ? (pause ? 'Resume' : "Pause") : 'Start'}</button>
                            </div>
                            <div className=" my-4 lg:m-2  bg-red-300">
                                <button onClick={()=>{addLapHandler(); play()}}
                                    className="text-lg font-semibold text-center px-3 py-3 lg:py-2 w-full">Lap</button>
                            </div>
                            <div className="my-4 lg:m-2 bg-red-300">
                                <button onClick={() => { setPause(false); setStart(false); setMilisec(0); resetLap(); play() }}
                                    className="text-lg font-semibold text-center px-3 py-3 lg:py-2 w-full"> Reset</button>
                            </div>
                        </div>


                        <div className="h-3/5 lg:h-44 ml-6 lg:ml-8 overflow-scroll overflow-hidden overflow-x-hidden custom-scroll mt-3" >



                            {
                                timeLap.map((lap) => {
                                    return (
                                        <>
                                            <div className="flex flex-row text-sm ">
                                                <div className=" px-1 lg:px-2">{++count<10? "0"+count:count}</div>
                                                <div className="px-1 lg:px-2">{("0" + Math.floor((lap.lap / 60000) % 60)).slice(-2)}:
                                                    {("0" + Math.floor((lap.lap / 1000) % 60)).slice(-2)}:

                                                    {("0" + ((lap.lap / 10) % 100)).slice(-2)}</div>
                                                <div className="pl-1 lg:pl-2">{lap.time}</div>
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
                <About/>

            </div>
        </>
    )
}

export default StopWatch;