
type AccordionPropsType = {
    titleValue: string,
    colapsed: boolean
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} colapsed={props.colapsed} />
            {!props.colapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    colapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion