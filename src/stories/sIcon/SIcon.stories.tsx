import React from "react";
import { Story } from "@storybook/react";

import { SIcon } from "../../components";
import { SIconSize } from "../../utils";

export default {
    title: "React/SIcon (PD)",
    component: SIcon,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SIcon>;

const Template: Story<PropsType> = (args) => <SIcon {...args} />;

export const IconMedium = Template.bind({});

IconMedium.args = {
    className: " black",
    xlinkHref: "/images/icons/16px/FilterFilled16px.svg#filterfilled16px-a",
};

export const IconLarge = Template.bind({});

IconLarge.args = {
    className: " black",
    iconName: "FilterFilled",
    iconSize: SIconSize.Large,
};
