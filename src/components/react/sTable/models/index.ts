import { SortOrderType } from "primereact/column";
import { FilterMatchModeType } from "primereact/datatable";
import { ReactNode } from "react";

import { ISDropdownOption, ISDropdownOptionGrouped } from "../../sDropdownFilter";

export interface ISTable {
    className?: string;
    /**
     * Shows the Report f.e. 1 of 10 from 200
     */
    showReport?: boolean;
    /**
     * Shows rows per page dropdown
     */
    showRowsPerPage?: boolean;
    /**
     * Data
     */
    data?: ISTableData[];
    /**
     * Column configuration like sortable, cellTemplate, headerName, filterType
     */
    columns: ISTableColumn[];
    /**
     * amount of rows shown per default
     */
    rows?: number;
    /**
     * Options in the Rows per Page dropdown
     */
    rowsPerPageOptions?: number[];
    /**
     * locale that is used for date and price format
     */
    locale?: string;
    /**
     * you can pass an object of custom cell templates, consider referencing your custom template function in your column configuration
     */
    customTemplates?: ISTableCustomTemplate;
    /**
     * Array with the set search filters containing name and value
     */
    searchFilters?: ISTableFilter[];
    /**
     * Updates search filters
     * @param filters get the array of ISTableFilter
     */
    setSearchFilters?: (filters: ISTableFilter[]) => void;
    /**
     * Define whether to show pagination or not
     */
    showPagination?: boolean;
    /**
     * lazyParams that gonna be send to your api for sorting, pagination, etc.
     */
    lazyParams?: ISTableLazyParams;
    setLazyParams?: (params: ISTableLazyParams) => void;
    /**
     * Total Records have to be send if you use lazyLoading if not its gonna be determined by data.length
     */
    totalRecords?: number;
    /**
     * activate lazyLoading
     */
    lazyLoad?: boolean;
    /**
     * show loading spinner
     */
    loading?: boolean;
    /**
     * Sets Label for Per Page Dropdown
     */
    rowsDropdownLabel: string;
}

export interface ISTableColumn {
    field: string;
    header: string;
    template: {
        custom: boolean;
        type: string;
    };
    filter?: ITableColumnFilter;
    sortable: boolean;
    columnWidth?: string;
    additionalProps?: ISTableColumnAdditionalProps;
}

export interface ISTableFilter {
    name: string;
    value: string | number | Date;
    filtering: string;
    dataType: string;
}

export interface ISTableCustomTemplate {
    [key: string]: (rowData: ISTableData, fieldName: string, header: string, additionalProps?: ISTableColumnAdditionalProps) => ReactNode;
}

export interface ISTableColumnAdditionalProps {
    [key: string]: string | number;
}

export interface ITableColumnFilter {
    active: boolean;
    type: string;
    filtering: FilterMatchModeType;
    placeholder: string;
    dataType: "string" | "number" | "Date";
    filterFunction?: string;
    dropdownOptions?: ISDropdownOption[] | ISDropdownOptionGrouped[];
}

export interface ISTableData {
    [key: string]: string | number | undefined;
}

export interface ISTableSortEvent {
    sortField: string;
    sortOrder?: SortOrderType;
    multiSortMeta: unknown;
}

export interface ISTableFilterEvent {
    filters: unknown;
}

export interface ISTablePageEvent {
    first: number;
    rows: number;
}

export interface ISTableLazyParams {
    first?: number;
    rows?: number;
    page?: number;
    filters?: any;
    sortField?: string;
    sortOrder?: SortOrderType;
}
