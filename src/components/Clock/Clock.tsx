import React, { useEffect, useState } from 'react'

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num

    const hourssString = getTwoDigitsString(date.getHours())
    const minutesString = getTwoDigitsString(date.getMinutes())
    const secondsString = getTwoDigitsString(date.getSeconds())

    return (
        <div>
            <span>{hourssString}</span>
            :<span>{minutesString}</span>
            :<span>{secondsString}</span>
        </div>
    )
}
