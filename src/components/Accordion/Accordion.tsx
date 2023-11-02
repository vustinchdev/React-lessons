
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onChange} colapsed={props.collapsed} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
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
        <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => {
                return (
                    <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>
                )
            })}
        </ul>
    )
}

export default Accordion