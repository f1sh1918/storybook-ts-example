import { Story } from "@storybook/react";
import React from "react";

import { SDropdown } from "../../components";

export default {
    title: "React/SDropdown (PD)",
    component: SDropdown,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SDropdown>;
const Template: Story<PropsType> = (args) => {
    const [dropdownValue, setDropdownValue] = React.useState(null);
    return <SDropdown {...args} value={dropdownValue} setDropdownValue={setDropdownValue} />;
};

export const Primary = Template.bind({});
Primary.args = {
    defaultTextForSelect: "Model Code",
    items: [{ id: "Test", label: "Test" }],
};

export const DropdownMenuPlus = Template.bind({});
DropdownMenuPlus.args = {
    defaultTextForSelect: "Model Code",
    items: [{ id: "Test", label: "Test" }],
    iconUrl: "/images/icons/16px/Plus16px.svg#plus16px-a",
};
