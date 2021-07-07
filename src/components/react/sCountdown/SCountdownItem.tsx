import React from "react";

interface ISCountdownItem {
    value: number;
    label: string;
}

const SCountdownItem: React.FunctionComponent<ISCountdownItem> = ({ value, label }) => {
    return (
        <div className="SCountdown-item-wrapper">
            <div className="SCountdown-item d-flex">{value}</div>
            <div className="SCountdown-item-label">
                <span>{label}</span>
            </div>
        </div>
    );
};

export default SCountdownItem;
