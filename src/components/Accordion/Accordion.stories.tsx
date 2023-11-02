// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const onChangeCallback = action('onCahnge')

export const MenuCollapsedMode = () => {
    return <Accordion
        onChange={onChangeCallback}
        collapsed={true}
        titleValue='Menu'
        items={[]}
        onClick={onClickCallback}
    />
}

export const UsersUncollapsedMode = () => {
    return <Accordion
        onChange={() => { }}
        collapsed={false}
        titleValue='Opened Accordion'
        onClick={onClickCallback}
        items={[{ title: 'Dmitry', value: 1 }, { title: 'Viktor', value: 2 }, { title: 'Sveta', value: 3 }]}
    />
}


export const ModeChanging = () => {

    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        onChange={() => setCollapsed(!collapsed)}
        collapsed={collapsed}
        titleValue='Opened Accordion'
        onClick={onClickCallback}
        items={[{ title: 'Dmitry', value: 1 }, { title: 'Viktor', value: 2 }]}
    />
}