import { create } from "zustand";


export const StopWatchStore = create((set)=>(
    {
        timeLap:[],
        addLap: (lap) =>{
            set((state) => (
                {
                    timeLap : [...state.timeLap, {
                        lap : lap.lap, time: lap.time
                    }]
                }
            )

            )
        },

        resetLap: () =>{
            set((state)=>(
                {
                    timeLap:[]
                }
            ))

        }
    }
))