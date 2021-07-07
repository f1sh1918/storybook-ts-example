import React from "react";
import { InputText } from "primereact/inputtext";
import classNames from "classnames";
import { FilterMatchModeType } from "primereact/datatable";
import { ChangeParams } from "primereact/dropdown";

import SIcon from "../sIcon/SIcon";


/**
 * Here is an example of the simple filter input. Check STable for how to use with Table
 */

interface ISSearchInputFilter {
    /**
     * Type of filtering like contains, in, equals
     */
    filtering?: FilterMatchModeType;
    /**
     * current index of the filter in state array
     */
    filterIndex?: number;
    /**
     * field name used to filter
     */
    fieldName?: string;
    /**
     * You can pass children like a label or icon
     */
    className?: string;
    /**
     * current search value - use state
     */
    searchValue?: string;
    /**
     * USE FOR TABLE FILTER
     * Method receives the Input Event and additionally a boolean can be added for clearingFilter
     */
    onTableSearchChange?: (
        e: ChangeParams,
        fieldName: string,
        index: number,
        filtering: FilterMatchModeType,
        dataType: string,
        clear?: boolean
    ) => void;
    /**
     * Placeholder for Input Text
     */
    placeholder?: string;
    /**
     * defines data-type that is used for backend filtering method
     */
    dataType?: string;
    /**
     * defines if you want to use it as a table filter or normal searchInput
     */
    tableFilter?: boolean;
    /**
     * USE FOR SIMPLE FILTER
     * use setState fkt
     */
    setSearchValue?: (searchValue: string) => void;
}

const SSearchInputFilter: React.FunctionComponent<ISSearchInputFilter> = ({
    filtering,
    filterIndex,
    fieldName,
    className,
    searchValue,
    onTableSearchChange,
    placeholder,
    dataType,
    tableFilter,
    setSearchValue,
}) => {
    return (
        <div className={classNames("SSearchInputFilter d-flex", className)}>
            <InputText
                value={searchValue ?? ""}
                onChange={(e) =>
                    tableFilter
                        ? onTableSearchChange && onTableSearchChange(e as any, fieldName!, filterIndex!, filtering!, dataType!)
                        : setSearchValue && setSearchValue(e.target.value)
                }
                placeholder={placeholder}
                className="SSearchInputFilter--input"
            />
            {searchValue?.length ? (
                <div
                    className="d-flex SSearchInputFilter--btn pointer"
                    onClick={(e) =>
                        tableFilter
                            ? onTableSearchChange && onTableSearchChange(e as any, fieldName!, filterIndex!, filtering!, dataType!, true)
                            : setSearchValue && setSearchValue("")
                    }
                >
                    <SIcon xlinkHref="/images/icons/16px/CancelClose16px.svg#cancelclose16px-a" className="medium black" />
                </div>
            ) : (
                <div className="d-flex SSearchInputFilter--btn">
                    <SIcon xlinkHref="/images/icons/16px/Search16px.svg#search16px-a" className="medium black" />
                </div>
            )}
        </div>
    );
};

export default SSearchInputFilter;
