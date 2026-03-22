import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/5cqn6o4r9/web-dev-journey-backup/sheryians-cohort-2-journey/day-113/web-cam/songs/Timro_Pratiksha_1v8BcvMVa.mp3",
        "posterUrl": "https://ik.imagekit.io/5cqn6o4r9/web-dev-journey-backup/sheryians-cohort-2-journey/day-113/web-cam/Folder/Timro_Pratiksha_J-0DL1KbE.jpeg",
        "title": "Timro Pratiksha",
        "mood": "happy",
    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}