// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'

export default {
    title: 'Accordion stories',
    component: Accordion
}


const onChangeCallback = action('onCahnge')

export const CollapsedAccordion = () => {
    return <Accordion
        onClick={onChangeCallback}
        colapsed={true}
        titleValue='Collapsed Accordion' />
}

export const OpenedAccordion = () => {
    return <Accordion
        onClick={() => { }}
        colapsed={true}
        titleValue='Opened Accordion' />
}


export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        onClick={() => setCollapsed(!collapsed)}
        colapsed={false}
        titleValue='Opened Accordion' />
}