import React from "react";
import classNames from "classnames";
import tinycolor from "tinycolor2";

interface ISColorChip {
    /**
     * Pass the active index of the colorItems Array, use state
     */
    activeItem?: number;
    /**
     * use setState to setActiveItem
     */
    setActiveItem?: (index: number) => void;
    /**
     * Pass items with color, label and disabled info
     */
    colorItems: IColorItem[];
    /**
     * Stirng value used for HTML attribute name in inputs
     */
    groupName?: string;
}

interface IColorItem {
    color: string;
    label: string;
    disabled: boolean;
}
const SColorChip: React.FunctionComponent<ISColorChip> = ({ activeItem, setActiveItem, colorItems, groupName }) => (
    <div className="d-flex">
        {colorItems?.map((item, index) => {
            const colorStyle = item.disabled
                ? { backgroundColor: tinycolor(item.color).setAlpha(0.2).toString() }
                : { backgroundColor: item.color };
            return (
                <div
                    key={`${item.label}_${index}`}
                    className="SColorChip custom-control custom-radio mx-2"
                    onClick={() => (!item.disabled && setActiveItem && setActiveItem(index)) || null}
                >
                    <input
                        type="radio"
                        className={classNames({
                            checked: index === activeItem && !item.disabled,
                        })}
                        name={groupName}
                        disabled={item.disabled}
                    />
                    <span
                        className={classNames("SColorChip-checkmark", {
                            disabled: item.disabled,
                        })}
                        style={colorStyle}
                        title={item.label}
                    ></span>
                </div>
            );
        })}
    </div>
);

export default SColorChip;
