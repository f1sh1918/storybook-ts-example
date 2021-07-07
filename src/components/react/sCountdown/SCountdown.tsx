import React from "react";
import Countdown from "react-countdown";

import SCountdownItem from "./SCountdownItem";

interface ISCountdown {
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * The date until the countdown will count can be provided as string or Date
     */
    date?: string | Date | number;
}

interface ICountdownTimeFormatted {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * More information you can find on https://www.npmjs.com/package/react-countdown
 */

const SCountdown: React.FunctionComponent<ISCountdown> = ({ className, date }) => {
    const correctedDate = date ?? Date.now() + 500000;
    const separator = <div className="SCountdown-separator">:</div>;

    const renderItems = (countdownTimeFormated: ICountdownTimeFormatted): React.ReactNode => {
        const { days, hours, minutes, seconds } = countdownTimeFormated;
        // Render a countdown
        return (
            <div className="SCountdown-wrapper d-flex">
                <SCountdownItem value={days} label="Tage" />
                {separator}
                <SCountdownItem value={hours} label="Stunden" />
                {separator}
                <SCountdownItem value={minutes} label="Minuten" />
                {separator}
                <SCountdownItem value={seconds} label="Sekunden" />
            </div>
        );
    };

    return (
        <div className={className}>
            <Countdown date={correctedDate} renderer={renderItems} />
        </div>
    );
};
export default SCountdown;
