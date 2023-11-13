import React from "react"


type OnOffType = {
    onClick: (on: boolean) => void
    on: boolean
}

export const OnOff = React.memo((props: OnOffType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatoryStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: props.on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => props.onClick(!props.on)}>On</div>
            <div style={offStyle} onClick={() => props.onClick(!props.on)}>Off</div>
            <div style={indicatoryStyle}></div>
        </div>
    )
})