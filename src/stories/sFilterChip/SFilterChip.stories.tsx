import React from "react";
import { Story } from "@storybook/react";

import { SFilterChip, SIcon } from "../../components";

export default {
    title: "React/SFilterChip",
    component: SFilterChip,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SFilterChip>;

const Template: Story<PropsType> = (args) => (
    <SFilterChip {...args}>
        <span className="btn__text">FilterTag</span>
        <SIcon xlinkHref={"/images/icons/12px/CancelClose12px.svg#cancelclose12px-a"} className={"small black"} />
    </SFilterChip>
);

export const FilterChip = Template.bind({});

FilterChip.args = {
    isLoading: false,
    iconPosition: "icon-after",
};
