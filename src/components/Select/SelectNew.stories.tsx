import React, { ChangeEvent, useState } from "react";
import { action } from '@storybook/addon-actions'
import { SelectNew } from "./SelectNew";


export default {
    title: 'SelectNew',
    component: SelectNew
}

export const SelectWithValue = () => {

    const [value, setValue] = useState('2')

    return <>
        <SelectNew onChange={setValue}
            value={value}
            items={[{ value: '1', title: 'one' }, { value: '2', title: 'two' }, { value: '3', title: 'three' }]
            } />
    </>
}



export const SelectWithoutValue = () => {

    const [value, setValue] = useState(null)

    return <>
        <SelectNew onChange={setValue}
            value={value}
            items={[{ value: '1', title: 'one' }, { value: '2', title: 'two' }, { value: '3', title: 'three' }]
            } />
    </>
}




