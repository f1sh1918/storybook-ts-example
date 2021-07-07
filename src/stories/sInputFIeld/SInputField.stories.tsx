import React from "react";
import { Story } from "@storybook/react";

import { SInputField } from "../../components";

export default {
    title: "React/SInputField (PD)",
    component: SInputField,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SInputField>;

const Template: Story<PropsType> = (args) => <SInputField {...args} />;

export const EmptyActive = Template.bind({});
EmptyActive.args = {
    helperText: "Assistive Text.",
    label: "Standard",
    id: "TestId",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    helperText: "Assistive Text.",
    label: "Disabled",
};

export const Required = Template.bind({});
Required.args = {
    required: true,
    label: "Hello World",
    helperText: "Assistive Text.",
};

export const Error = Template.bind({});
Error.args = {
    error: true,
    label: "Error",
    defaultValue: "Hello World",
    helperText: "Assistive Text.",
};

export const ActiveMultiline = Template.bind({});
ActiveMultiline.args = {
    helperText: "Assistive Text.",
    label: "Standard",
    multiLine: true,
};
