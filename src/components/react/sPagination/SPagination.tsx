import * as React from "react";
import classNames from "classnames";
import { PageState, Paginator, PaginatorTemplate } from "primereact/paginator";

import { getPaginationTemplate } from "./SPaginationTemplate/SPaginationTemplate";

interface SPaginationProps {
    className?: string;
    first: number;
    rows: number;
    setFirst: (index: number) => void;
    setRows: (index: number) => void;
    /**
     * show Report on the right side
     */
    showReport: boolean;
    /**
     * show rows per page on the right side
     */
    showRowsPerPage: boolean;
    dropdownOptions: number[];
    totalRecords: number;
    template: PaginatorTemplate;
    /**
     * Sets Label for Per Page Dropdown
     */
    rowsDropdownLabel: string;
}

const SPagination: React.FunctionComponent<SPaginationProps> = (props: SPaginationProps) => {
    const {
        first,
        setFirst,
        setRows,
        rows,
        showReport,
        showRowsPerPage,
        className,
        dropdownOptions,
        totalRecords,
        rowsDropdownLabel,
    } = props;

    const onPageChange = (e: PageState) => {
        setFirst(e.first);
        setRows(e.rows);
    };
    return (
        <Paginator
            className={classNames("SPagination", className)}
            template={getPaginationTemplate({ rowsDropdownLabel, showReport, showRowsPerPage, rowsPerPageOptions: dropdownOptions })}
            first={first}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
        />
    );
};
SPagination.defaultProps = {
    showRowsPerPage: true,
    showReport: true,
};

export default SPagination;
