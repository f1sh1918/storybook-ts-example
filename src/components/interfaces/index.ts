import { SortOrderType } from "primereact/column";
import { FilterMatchModeType } from "primereact/datatable";
import { ReactNode } from "react";

export interface SPaginationPageLink {
    onClick: () => void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: ReactNode;
    value: string;
    onChange: () => void;
}

export interface SPaginationRowsPerPage {
    className: string;
    value: string;
    onChange: () => void;
    currentPage: string;
    totalPages: string;
    totalRecords: string;
    element: ReactNode
    props: unknown;
}

export interface SPaginationCurrentReport extends SPaginationRowsPerPage {
    first: number;
    rows: number;
    last: number;
}

export interface ISPaginationTemplate {
    layout: string;
    "RowsPerPageDropdown": (options: SPaginationRowsPerPage) => React.ReactNode;
    "FirstPageLink": (options: SPaginationPageLink) => React.ReactNode;
    "PrevPageLink": (options: SPaginationPageLink) => React.ReactNode;
    "NextPageLink": (options: SPaginationPageLink) => React.ReactNode;
    "LastPageLink": (options: SPaginationPageLink) => React.ReactNode;
    "CurrentPageReport"?: (options: SPaginationCurrentReport) => React.ReactNode;
}
