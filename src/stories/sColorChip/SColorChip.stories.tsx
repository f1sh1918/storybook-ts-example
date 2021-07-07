import React from "react";
import { Story } from "@storybook/react";

import { SColorChip } from "../../components";

export default {
    title: "React/SColorChip",
    component: SColorChip,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SColorChip>;

const Template: Story<PropsType> = (args) => <SColorChip {...args} />;

export const ColorChips = Template.bind({});
ColorChips.args = {
    colorItems: [
        { label: "red", color: "red", disabled: true },
        { label: "green", color: "green", disabled: false },
        { label: "blue", color: "blue", disabled: false },
    ],
};
