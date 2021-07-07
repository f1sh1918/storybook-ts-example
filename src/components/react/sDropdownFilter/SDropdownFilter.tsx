import React from "react";
import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";

import { ISDropdownFilter, ISDropdownOption, ISDropdownOptionGrouped } from "./models";
import SIcon from "../sIcon/SIcon";

export const SDropdownFilter: React.FunctionComponent<ISDropdownFilter> = (props) => {
    const {
        className,
        dropdownValue,
        onChangeDropdownValue,
        options,
        grouped,
        placeholder,
        showClear,
        fieldName,
        filterIndex,
        filtering,
        dataType,
    } = props;

    const groupedItemTemplate = (option: ISDropdownOptionGrouped) => {
        return (
            <div className="SDropdownFilter-group">
                <div>{option.label}</div>
            </div>
        );
    };

    const itemTemplate = (option: ISDropdownOption) => {
        return (
            <div className="SDropdownFilter-item-wrapper">
                <div>{option.label}</div>
                {option.label === dropdownValue && (
                    <SIcon xlinkHref={"/images/icons/16px/DoneSelected16px.svg#doneselected16px-a"} className={"medium black"} />
                )}
            </div>
        );
    };

    return (
        <div className={classNames("SDropdownFilter", className)}>
            <Dropdown
                {...props}
                value={dropdownValue}
                options={options}
                onChange={(e) => onChangeDropdownValue(e, fieldName, filterIndex, filtering, dataType)}
                optionGroupTemplate={grouped && groupedItemTemplate}
                placeholder={placeholder}
                className="p-column-filter"
                optionLabel={"label"}
                itemTemplate={itemTemplate}
                showClear={showClear}
            />
        </div>
    );
};
