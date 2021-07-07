import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SPagination } from "../../components";

export default {
    title: "React/SPagination (PD)",
    component: SPagination,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SPagination>;

const Template: Story<PropsType> = (args) => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(1);
    return <SPagination {...args} first={first} setFirst={setFirst} rows={rows} setRows={setRows} />;
};

export const Pagination = Template.bind({});
Pagination.args = {
    dropdownOptions: [1, 2, 3],
    totalRecords: 3,
    rowsDropdownLabel: "Anzeigen:",
};

export const PaginationSimple = Template.bind({});
PaginationSimple.args = {
    dropdownOptions: [1, 2, 3],
    totalRecords: 3,
    showReport: false,
    showRowsPerPage: false,
};
