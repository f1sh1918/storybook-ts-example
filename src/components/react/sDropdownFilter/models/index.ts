import { FilterMatchModeType } from "primereact/datatable";
import { ChangeParams } from "primereact/dropdown";

export interface ISDropdownFilter {
    /**
     * Type of filtering like contains, in, equals
     */
    filtering: FilterMatchModeType;
    /**
     * current index of the filter in state array
     */
    filterIndex: number;
    /**
     * field name used to filter
     */
    fieldName: string;
    /**
     * You can pass children like a label or icon
     */
    className?: string;
    /**
     * Chosen Dropdown Value
     */
    dropdownValue: string;
    /**
     * Chosen Dropdown Value
     */
    options?: ISDropdownOption[] | ISDropdownOptionGrouped[];
    /**
     * Uses Special Template for Group Header
     */
    grouped: boolean;
    /**
     * Placeholder for Input Text
     */
    placeholder: string;
    onChangeDropdownValue: (
        e: ChangeParams,
        fieldName: string,
        index: number,
        filtering: FilterMatchModeType,
        dataType: string,
        clear?: boolean
    ) => void;
    /**
     * Show clear indicator
     */
    showClear: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    dataType: string;
}

export interface ISDropdownOption {
    label: string;
    value: string;
}

export interface ISDropdownOptionGrouped {
    label: string;
    code: string;
    items: ISDropdownOption[];
}
