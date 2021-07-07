import React from "react";
import { Calendar } from "primereact/calendar";
import classNames from "classnames";
import { addLocale } from "primereact/api";
import {getCalenderFormat} from "../../../utils";


export interface ISDateFilter {
    className?: string;
    onDateChange: any;
    selectedDate?: Date | Date[] | string;
    dateFormat: string;
    placeholder: string;
    fieldName: string;
    filterIndex: number;
    filtering: string;
    locale?: string;
    dataType: string;
}

const SDateFilter: React.FunctionComponent<ISDateFilter> = ({
    className,
    selectedDate,
    onDateChange,
    dateFormat,
    placeholder,
    fieldName,
    filterIndex,
    filtering,
    locale,
    dataType,
}) => {
    if (locale) {
        addLocale(locale, getCalenderFormat(locale));
    }

    return (
        <div className={classNames("SDateFilter", className)}>
            <Calendar
                value={selectedDate as Date}
                onChange={(e) => onDateChange(e, fieldName, filterIndex, filtering, dataType)}
                dateFormat={dateFormat}
                className="p-column-filter"
                placeholder={placeholder}
                showIcon
                icon={"pi pi-search"}
                locale={locale}
                showButtonBar
                clearButtonClassName={"btn-v2 btn-black"}
                todayButtonClassName={"btn-v2 btn-transparent"}
            />
        </div>
    );
};

export default SDateFilter;
