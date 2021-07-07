import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Story } from "@storybook/react";

import { columns } from "../../components/react/sTable/mock/columns";
import { data } from "../../components/react/sTable/mock/products.json";
import { CustomerService } from "../../components/react/sTable/service/customerService";
import { columnsLazy } from "../../components/react/sTable/mock/columnsLazy";
import { ISTableFilter, ISTableLazyParams, STable } from "../../components";
import { ISTableData } from "../../components/react/sTable";
import { numberFormatDe } from "../../utils";

export default {
    title: "React/STable (PD)",
    component: STable,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof STable>;

const TemplateTable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);

    return <STable {...args} searchFilters={searchFiltersState} setSearchFilters={setSearchFiltersState} />;
};

export const Table = TemplateTable.bind({});

Table.args = {
    columns: columns,
    data: data,
    rowsDropdownLabel: "Anzeigen:",
    customTemplates: {
        customImageTemplate: (rowData, fieldName, header) => (
            <>
                <span className="p-column-title">{header}</span>
                <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
            </>
        ),
        customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
            <>
                <span className="p-column-title">{header}</span>
                <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                {additionalProps && <span>{additionalProps.data}</span>}
            </>
        ),
    },
};

const TemplateLazyTable: Story<PropsType> = (args) => {
    const [searchFiltersState, setSearchFiltersState] = useState<ISTableFilter[]>([]);

    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState<ISTableData[]>([]);
    const [lazyParams, setLazyParams] = useState<ISTableLazyParams>({
        first: 0,
        rows: 10,
        page: 1,
        sortOrder: 1,
        sortField: "date",
    });

    const customerService = new CustomerService();

    useEffect(() => {
        loadLazyData();
    }, [lazyParams]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadLazyData = () => {
        customerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then((data) => {
            setTotalRecords(data.totalRecords);
            setCustomers(data.customers);
        });
    };

    return (
        <Container className="container-xxl">
            <STable
                {...args}
                searchFilters={searchFiltersState}
                setSearchFilters={setSearchFiltersState}
                data={customers}
                totalRecords={totalRecords}
                lazyParams={lazyParams}
                setLazyParams={setLazyParams}
            />
        </Container>
    );
};

export const LazyTable = TemplateLazyTable.bind({});

LazyTable.args = {
    columns: columnsLazy,
    customTemplates: {
        customImageTemplate: (rowData, fieldName, header) => (
            <>
                <span className="p-column-title">{header}</span>
                <img className="p-column-img w-75" src={rowData[fieldName] as string} alt={rowData[fieldName] as string} />
            </>
        ),
        customPriceTemplate: (rowData, fieldName, header, additionalProps) => (
            <>
                <span className="p-column-title">{header}</span>
                <span className="p-column-text p-column-price">{numberFormatDe(rowData[fieldName] as number)}</span>
                {additionalProps && <span>{additionalProps.data}</span>}
            </>
        ),
    },
    lazyLoad: true,
    rowsDropdownLabel: "Anzeigen:",
    loading: false,
};
