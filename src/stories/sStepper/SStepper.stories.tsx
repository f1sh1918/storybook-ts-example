import React from "react";
import { Story } from "@storybook/react";

import { SStepper } from "../../components";

export default {
    title: "React/SStepper (PD)",
    component: SStepper,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SStepper>;
const Template: Story<PropsType> = (args) => <SStepper {...args} />;

export const Stepper = Template.bind({});

Stepper.args = {
    activeStep: 1,
    stepNames: ["Distributoren", "Prüfung", "Nächste Schritte"],
};
