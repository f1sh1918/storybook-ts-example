import { ISTableColumn } from "../../../interfaces";

export const columnsLazy: ISTableColumn[] = [
    {
        field: "name",
        header: "Bezeichnung",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "contains",
            dataType: "string"
        },
        sortable: true,
    },
    {
        field: "company",
        header: "Company",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "contains",
            dataType: "string"
        },
        sortable: true,
    },
    {
        field: "activity",
        header: "Aktivität",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "equals",
            dataType: "number"
        },
        sortable: true,
        columnWidth: "10%",
    },
    {
        field: "balance",
        header: "Balance",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "equals",
            dataType: "number"
        },
        sortable: true,
    },
    {
        field: "date",
        header: "Date",
        template: {
            custom: false,
            type: "textDateTemplate"
        },
        filter: {
            active: true,
            type: "date",
            placeholder: "Suchen",
            filtering: "custom",
            dataType: "Date",
            filterFunction: "filterDate",
        },
        sortable: true,
    }
];
