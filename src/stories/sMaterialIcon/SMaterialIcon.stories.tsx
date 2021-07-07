import React from "react";
import { Story } from "@storybook/react";

import { SMaterialIcon } from "../../components";

export default {
    title: "React/SMaterialIcon (PD)",
    component: SMaterialIcon,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SMaterialIcon>;

const Template: Story<PropsType> = (args) => <SMaterialIcon {...args} />;

/**
 * This component is used inside an Material UI Component as property "IconComponent"
 */
export const MaterialIcon = Template.bind({});

MaterialIcon.args = {
    iconUrl: "images/icons/16px/OpenDown16px.svg#opendown16px-a",
    className: "MuiSelect-icon",
};
