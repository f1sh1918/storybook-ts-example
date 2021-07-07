import { Story } from "@storybook/react";
import React from "react";

import { SCountdown } from "../../components";

export default {
    title: "React/SCountdown (PD)",
    component: SCountdown,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SCountdown>;

const Template: Story<PropsType> = (args) => <SCountdown {...args} />;

export const Countdown = Template.bind({});

Countdown.args = {
    date: Date.now() + 500000,
};
