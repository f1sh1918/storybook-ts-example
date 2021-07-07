import React from "react";
import { Story } from "@storybook/react";

import SSpinner from "../../components/react/sSpinner/SSpinner";

export default {
    title: "React/SSpinner (PD)",
    component: SSpinner
};

type PropsType = React.ComponentProps<typeof SSpinner>;
const Template: Story<PropsType> = (args) => <SSpinner {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
    animation: "border",
    variant: "secondary",
};
