import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import classNames from "classnames";

import SMaterialIcon from "../sMaterialIcon/SMaterialIcon";
import { ISDropdown } from "./models";

export const SDropdown: React.FunctionComponent<ISDropdown> = ({
    className,
    defaultTextForSelect,
    items,
    setDropdownValue,
    value,
    iconUrl,
}) => {
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setDropdownValue && setDropdownValue(event.target.value as string);
    };

    return (
        // add this dropdown-set-scroll also to story book
        <div className="dropdown-set-scroll">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value ?? ""}
                displayEmpty
                onChange={handleChange}
                className={classNames("dropdown-select v2", className)}
                IconComponent={(props) => (
                    <SMaterialIcon {...props} iconUrl={iconUrl ?? "/images/icons/16px/OpenDown16px.svg#opendown16px-a"} />
                )}
            >
                {defaultTextForSelect && <MenuItem value={""}>{defaultTextForSelect}</MenuItem>}
                {items?.map((item) => {
                    return (
                        <MenuItem key={[item.id, item.label].join("_")} value={item.id}>
                            {item.label}
                        </MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};
