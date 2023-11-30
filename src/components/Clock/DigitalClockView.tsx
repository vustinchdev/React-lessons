import React, { FC } from 'react';
import { ClockViewType } from './Clock';

export const DigitalClockView: FC<ClockViewType> = ({ date }) => {

    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num;

    return <>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :<span>{getTwoDigitsString(date.getMinutes())}</span>
        :<span>{getTwoDigitsString(date.getSeconds())}</span>
    </>;
};
