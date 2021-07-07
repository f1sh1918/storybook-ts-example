import React from "react";
import classNames from "classnames";

interface ISLabelChip {
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * Items provide an object array with the key label
     */
    labelItems?: ILabelItem[];
    /**
     * Name of the radio group
     */
    groupName: string;
    /**
     * Currently active icon, provide index of the array
     */
    activeItem?: number;
    /**
     * handle the change of the chip, use setState
     */
    handleChipChange?: (index: number) => void;
}

interface ILabelItem {
    label: string;
    disabled?: boolean;
    autoChecked?: boolean;
}
const SLabelChip: React.FunctionComponent<ISLabelChip> = ({ className, labelItems, groupName, activeItem, handleChipChange }) => {
    return (
        <div className={classNames("label-chip-wrapper d-flex flex-wrap", className)}>
            {labelItems?.map((item, index) => (
                <div
                    key={`${groupName}_${item.label}_${index}`}
                    className="option-chip-label custom-control custom-radio v2"
                    onChange={() => handleChipChange && handleChipChange(index)}
                >
                    <input
                        disabled={item?.disabled}
                        type="radio"
                        id={`${groupName}_${item.label}_${index}`}
                        className={classNames("custom-control-input", {
                            checked: item?.autoChecked ?? index === activeItem,
                        })}
                        name={groupName}
                        defaultChecked={item?.autoChecked ?? index === activeItem}
                    />
                    <label title={item.label} htmlFor={`${groupName}_${item.label}_${index}`} className="custom-control-label">
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default SLabelChip;
