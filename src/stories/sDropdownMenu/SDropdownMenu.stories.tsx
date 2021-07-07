import { Story } from "@storybook/react";
import React, { useState } from "react";
import { SDropdownMenu } from "../../components";

export default {
    title: "React/SDropdownMenu",
    component: SDropdownMenu,
    argTypes: {},
};

const ITEM_HEIGHT = 48;

type PropsType = React.ComponentProps<typeof SDropdownMenu>;
const Template: Story<PropsType> = (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
    return (
        <SDropdownMenu
            {...args}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
        />
    );
};

const items = ["Edit", "Delete", "Save", "Share", "Long Text for the field to show paperprops are working"];

const items2 = ["Delete", "Force Delete"];

const itemsWithIcon = [
    { label: "Delete", listIconUrl: "/images/icons/16px/Delete16px.svg#delete16px-a" },
    { label: "Download", listIconUrl: "/images/icons/16px/Download16px.svg#download16px-a" },
];

const paperStyleProps = {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: "20ch",
    },
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
    items: items,
    iconUrl: "/images/icons/16px/Kebab16px.svg#kebab16px-a",
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
};

export const DropdownMenuWithIconItem = Template.bind({});
DropdownMenuWithIconItem.args = {
    items: itemsWithIcon,
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
};

export const DropdownMenuWithIcon = Template.bind({});
DropdownMenuWithIcon.args = {
    items: items2,
    iconUrl: "/images/icons/16px/Delete16px.svg#delete16px-a",
    paperStyleProps: paperStyleProps,
    menuId: "long-menu",
};
