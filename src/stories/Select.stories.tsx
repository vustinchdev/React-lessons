import React, { ChangeEvent, useState } from "react";

export default {
    title: 'Select'
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
}