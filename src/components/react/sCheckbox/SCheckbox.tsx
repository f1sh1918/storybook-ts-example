import React from "react";
import classNames from "classnames";

export interface ISCheckbox {
    id: string;
    disabled?: boolean;
    checked?: boolean;
    setChecked: (value: boolean) => void;
    label: string | number;
    className?: string;
}

const SCheckbox: React.FunctionComponent<ISCheckbox> = ({ id, disabled, checked, setChecked, label, className }) => {
    const handleChange = (event: React.ChangeEvent<{ name?: string; checked: boolean }>) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classNames("custom-checkbox s-checkbox", className)}>
            <input
                type="checkbox"
                id={id}
                onChange={(e) => handleChange(e)}
                className="s-checkbox__control__input custom-control-input"
                disabled={disabled}
                checked={checked}
            />
            <label className="s-checkbox__control__label custom-control-label p1">{label}</label>
        </div>
    );
};

export default SCheckbox;
