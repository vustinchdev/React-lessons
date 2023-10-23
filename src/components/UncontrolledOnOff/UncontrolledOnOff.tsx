import { FC, useState } from "react"


type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {

    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatoryStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatoryStyle}></div>
        </div >
    )

    // if (props.on) {
    //     return (
    //         <S.Wrapper>
    //             <S.GreenSquare>on</S.GreenSquare>
    //             <S.Square>off</S.Square>
    //             <S.GreenCircle></S.GreenCircle>
    //         </S.Wrapper>
    //     )
    // } else {
    //     return (
    //         <S.Wrapper>
    //             <S.Square>on</S.Square>
    //             <S.RedSquare >off</S.RedSquare>
    //             <S.RedCircle></S.RedCircle>
    //         </S.Wrapper>
    //     )
    // }
}