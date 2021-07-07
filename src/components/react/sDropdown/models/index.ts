import React from "react";

export interface ISDropdown {
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * Default text shown as a placeholder
     */
    defaultTextForSelect?: string;
    /**
     * Dropdown items
     */
    items: IItem[];
    /**
     * Handles the dropdown change use setState
     */
    setDropdownValue?: (value: string) => void;
    /**
     * Provide the current value use state
     */
    value?: string;
    /**
     * Provide optional icon
     */
    iconUrl?: string;
}

export interface IItem {
    id: string;
    label: string | React.ReactNode;
}
