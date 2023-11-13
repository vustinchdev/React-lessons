import React, { KeyboardEvent, useEffect, useState } from 'react'
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectNew = React.memo((props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onClickToggleHandler = () => setActive(!active)
    const onClickItemHandler = (value: any) => {
        props.onChange(value)
        onClickToggleHandler()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key == 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <div className={styles.select}>
                <span className={styles.main} onClick={onClickToggleHandler}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div key={i.value}
                            onMouseEnter={() => { setHoveredElementValue(i.value) }}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            onClick={() => { onClickItemHandler(i.value) }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
})
