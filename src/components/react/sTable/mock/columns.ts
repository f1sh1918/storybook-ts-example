import { ISTableColumn } from "../../../interfaces";

export const columns: ISTableColumn[] = [
    {
        field: "image",
        header: "Vorschau",
        template: {
            custom: true,
           type: "customImageTemplate"
        },
        sortable: false
    },
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
        field: "code",
        header: "Modell(e) & Variante(n)",
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
        field: "category",
        header: "Kategory",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "dropdown",
            placeholder: "Alle",
            filtering: "equals",
            dataType: "string",
            dropdownOptions : [
                { label: "Accessories", value: "Accessories" },
                { label: "Clothing", value: "Clothing" },
                { label: "Electronics", value: "Electronics" },
                { label: "Fitness", value: "Fitness" },
            ]
        },
        sortable: true
    },
    {
        field: "category",
        header: "Subkategory",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "dropdown_grouped",
            filtering: "equals",
            dataType: "string",
            placeholder: "Alle",
            dropdownOptions : [
                {
                    label: "Group1",
                    code: "Group1",
                    items: [
                        { label: "Accessories", value: "Accessories" },
                        { label: "Clothing", value: "Clothing" },
                    ],
                },
                {
                    label: "Group2",
                    code: "Group2",
                    items: [{ label: "Electronics", value: "Electronics" }],
                },
                {
                    label: "Group3",
                    code: "Group3",
                    items: [{ label: "Fitness", value: "Fitness" }],
                },
            ]
        },
        sortable: true
    },
    {
        field: "quantity",
        header: "Stk.",
        template: {
            custom: false,
            type: "textBodyTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "equals",
            dataType: "number",
        },
        sortable: true,
        columnWidth: "10%",
    },
    {
        field: "price",
        header: "Summe",
        template: {
            custom: true,
            type: "customPriceTemplate"
        },
        filter: {
            active: true,
            type: "input",
            placeholder: "Suchen",
            filtering: "custom",
            dataType: "number",
            filterFunction: "filterPrice"
        },
        sortable: true,
        additionalProps: {
            data: " (demo)"
        }
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
