import moment from "moment";
import React, { ReactNode, Ref, useRef } from "react";
import { DataTable, FilterMatchModeType } from "primereact/datatable";
import { Column } from "primereact/column";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import "moment/locale/de";
import { ChangeParams } from "primereact/dropdown";

import { Breakpoint, BreakpointType, formatTableDate, tableFilterFunctions, tableFilterType, tableTemplateType } from "../../../constants";
import { getPaginationTemplate } from "../sPagination/SPaginationTemplate/SPaginationTemplate";
import {
    ISTable,
    ISTableColumn,
    ISTableColumnAdditionalProps,
    ISTableCustomTemplate,
    ISTableData,
    ISTableFilter,
    ISTableFilterEvent,
    ISTableLazyParams,
    ISTablePageEvent,
    ISTableSortEvent,
    ITableColumnFilter,
} from "./models";
import { includeMediaBreakpoint } from "../../../utils/breakpoint";
import SSearchInputFilter from "../sSearchInputFilter/SSearchInputFilter";
import SIcon from "../sIcon/SIcon";
import { SDropdownFilter } from "../sDropdownFilter";
import SDateFilter from "../sDateFilter/SDateFilter";
import SSpinner from "../sSpinner/SSpinner";

export const STable: React.FunctionComponent<ISTable> = ({
    showReport = true,
    showRowsPerPage = true,
    data,
    columns,
    rows = 10,
    rowsPerPageOptions = [10, 20, 50],
    className,
    locale = "de",
    customTemplates,
    searchFilters,
    setSearchFilters,
    lazyParams,
    setLazyParams,
    totalRecords,
    lazyLoad = false,
    showPagination = true,
    loading = false,
    rowsDropdownLabel,
}) => {
    const dt: Ref<DataTable> = useRef(null);
    const desktop = useMediaQuery(includeMediaBreakpoint(BreakpointType.min, Breakpoint.lg));

    const downloadBodyTemplate = (rowData: ISTableData, fieldName: string) => {
        return (
            <div className="text-center">
                <a href={`${rowData[fieldName]}`} download>
                    <SIcon xlinkHref="/images/icons/16px/Download16px.svg#download16px-a" className="medium black" />
                </a>
            </div>
        );
    };

    const textBodyTemplate = (rowData: ISTableData, fieldName: string, header: string): ReactNode => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && <span className="p-column-text">{rowData[fieldName]}</span>}
            </>
        );
    };

    const textDateTemplate = (rowData: ISTableData, fieldName: string, header: string): ReactNode => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && (
                    <span className="p-column-text">
                        {(rowData[fieldName] as string)?.length && moment(rowData[fieldName]).format(formatTableDate.TABLE_BODY)}
                    </span>
                )}
            </>
        );
    };

    const imageBodyTemplate = (rowData: ISTableData, fieldName: string, header: string, additionalProps?: ISTableColumnAdditionalProps) => {
        return (
            <>
                <span className="p-column-title">{header}</span>
                {fieldName in rowData && (
                    <img
                        className="p-column-img"
                        style={{ width: `${additionalProps?.imageWidth}` }}
                        src={`${rowData[fieldName]}`}
                        alt={rowData[fieldName] as string}
                    />
                )}
            </>
        );
    };

    const getBodyTemplate = (
        rowData: ISTableData,
        fieldName: string,
        header: string,
        templateType: string,
        additionalProps?: ISTableColumnAdditionalProps
    ): ReactNode => {
        switch (templateType) {
            case tableTemplateType.DATE:
                return textDateTemplate(rowData, fieldName, header);
            case tableTemplateType.TEXT:
                return textBodyTemplate(rowData, fieldName, header);
            case tableTemplateType.DOWNLOAD:
                return downloadBodyTemplate(rowData, fieldName);
            case tableTemplateType.IMAGE:
                return imageBodyTemplate(rowData, fieldName, header, additionalProps);
            default:
                return null;
        }
    };

    const getCustomBodyTemplate = (
        rowData: ISTableData,
        fieldName: string,
        header: string,
        templateType: string,
        template?: ISTableCustomTemplate,
        additionalProps?: ISTableColumnAdditionalProps
    ): ReactNode => {
        return template && template[templateType] && template[templateType](rowData, fieldName, header, additionalProps);
    };

    const getFilterType = (filter: ITableColumnFilter, index: number, fieldName: string, locale?: string): Object | undefined => {
        const searchValue: string | Date = searchFilters && searchFilters.length ? (searchFilters[index]?.value as string) : "";

        switch (filter?.type) {
            case tableFilterType.INPUT:
                return (
                    <SSearchInputFilter
                        searchValue={searchValue}
                        onTableSearchChange={onUpdateFilter}
                        placeholder={filter.placeholder}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        tableFilter={true}
                    />
                );
            case tableFilterType.DROPDOWN:
                return (
                    <SDropdownFilter
                        options={filter.dropdownOptions}
                        grouped
                        dropdownValue={searchValue}
                        placeholder={filter.placeholder}
                        onChangeDropdownValue={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        showClear={searchValue ? true : false}
                    />
                );
            case tableFilterType.DROPDOWN_GROUPED:
                return (
                    <SDropdownFilter
                        options={filter.dropdownOptions}
                        grouped
                        dropdownValue={searchValue}
                        placeholder={filter.placeholder}
                        onChangeDropdownValue={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dataType={filter.dataType}
                        optionGroupLabel="label"
                        optionGroupChildren="items"
                        showClear={searchValue ? true : false}
                    />
                );
            case tableFilterType.DATE:
                return (
                    <SDateFilter
                        selectedDate={searchValue}
                        locale={locale}
                        placeholder={filter.placeholder}
                        onDateChange={onUpdateFilter}
                        fieldName={fieldName}
                        filterIndex={index}
                        filtering={filter.filtering}
                        dateFormat={formatTableDate.FILTER}
                        dataType={filter.dataType}
                    />
                );
            default:
                return undefined;
        }
    };

    const filterPrice = (value: string, filter: string): string | null => {
        filter = filter.replace(",", ".");
        return value.toString().indexOf(filter) !== -1 ? value : null;
    };

    const filterDate = (value: string, filter: string | Date): boolean => {
        if (filter === undefined || filter === null || (typeof filter === "string" && filter.trim() === "")) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    };

    const formatDate = (date: Date | string): string => {
        let currentDate: Date;
        if (typeof date === "string") {
            currentDate = new Date(date);
        } else {
            currentDate = date;
        }
        let month: number | string = currentDate.getMonth() + 1;
        let day: number | string = currentDate.getDate();

        if (month < 10) {
            month = "0" + month;
        }

        if (day < 10) {
            day = "0" + day;
        }

        return currentDate.getFullYear() + "-" + month + "-" + day;
    };

    const getFilterFunction = (value: string, filter: string, functionType: string): ReactNode => {
        switch (functionType) {
            case tableFilterFunctions.DATE:
                return filterDate(value, filter);
            case tableFilterFunctions.PRICE:
                return filterPrice(value, filter);
            default:
                return null;
        }
    };

    const onUpdateFilter = (
        e: ChangeParams,
        fieldName: string,
        index: number,
        filtering: FilterMatchModeType,
        dataType: string,
        clear?: boolean
    ) => {
        const value = clear ? "" : e.target.value;
        dt?.current?.filter(value, fieldName, filtering);

        if (searchFilters) {
            let currentSearchFilters: ISTableFilter[] = [...searchFilters];

            currentSearchFilters[index] = { value: value, name: fieldName, filtering: filtering, dataType: dataType };

            if (typeof setSearchFilters === "function") {
                setSearchFilters(currentSearchFilters);
            }
        }
    };

    // Custom Events for LazyLoad

    const onPage = (event: ISTablePageEvent) => {
        const _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        setLazyParams && setLazyParams(_lazyParams);
    };

    const onSort = (event: ISTableSortEvent) => {
        const _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        setLazyParams && setLazyParams(_lazyParams);
    };

    const onFilter = (event: ISTableFilterEvent) => {
        let _lazyParams: ISTableLazyParams = { ...lazyParams, ...event };
        _lazyParams.first = 0;
        setLazyParams && setLazyParams(_lazyParams);
    };

    if (!columns || !data) {
        return <SSpinner animation={"border"} variant={"secondary"} />;
    }

    return (
        <div className={classNames("datatable-responsive", className)}>
            <div className="card">
                <DataTable
                    ref={dt}
                    value={data}
                    className="p-datatable-responsive"
                    paginator={showPagination}
                    lazy={lazyLoad}
                    first={lazyParams?.first}
                    rows={lazyParams?.rows ?? rows}
                    totalRecords={totalRecords}
                    onPage={lazyParams && onPage}
                    paginatorClassName="SPagination"
                    paginatorTemplate={getPaginationTemplate({ showReport, showRowsPerPage, rowsPerPageOptions, rowsDropdownLabel })}
                    onSort={lazyLoad ? onSort : undefined}
                    sortField={lazyParams?.sortField}
                    sortOrder={lazyParams?.sortOrder}
                    onFilter={lazyLoad ? onFilter : undefined}
                    filters={lazyParams?.filters}
                    currentPageReportTemplate={!lazyLoad ? "{first} bis {last} von {totalRecords}" : undefined}
                    rowsPerPageOptions={rowsPerPageOptions}
                    loading={loading}
                >
                    {columns.map((column: ISTableColumn, index) => {
                        return (
                            <Column
                                style={{ width: `${desktop && column?.columnWidth}` }}
                                key={index}
                                field={column.field}
                                header={column.header}
                                body={(rowData: ISTableData) =>
                                    column.template.custom
                                        ? getCustomBodyTemplate(
                                              rowData,
                                              column.field,
                                              column.header,
                                              column.template.type,
                                              customTemplates,
                                              column?.additionalProps
                                          )
                                        : getBodyTemplate(
                                              rowData,
                                              column.field,
                                              column.header,
                                              column.template.type,
                                              column?.additionalProps
                                          )
                                }
                                filter={column?.filter?.active}
                                filterElement={column?.filter && getFilterType(column.filter, index, column.field, locale)}
                                filterFunction={(value: string, filter: string) =>
                                    column.filter?.filterFunction && getFilterFunction(value, filter, column.filter.filterFunction)
                                }
                                sortable={column.sortable}
                            />
                        );
                    })}
                </DataTable>
            </div>
        </div>
    );
};
