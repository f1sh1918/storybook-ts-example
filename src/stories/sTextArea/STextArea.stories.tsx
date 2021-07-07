import React, { useState } from "react";
import { Story } from "@storybook/react";

import { STextArea } from "../../components";

export default {
    title: "React/STextArea",
    component: STextArea,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof STextArea>;

const Template: Story<PropsType> = (args) => {
    const [value, setInputValue] = useState("");
    const onSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return <STextArea {...args} value={value} onChange={onSetInputValue} />;
};

export const EmptyActive = Template.bind({});
EmptyActive.args = {
    helperText: "Some important Text",
    label: "Standard",
    id: "TestId",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    helperText: "Some important Text",
    label: "Disabled",
};

export const Required = Template.bind({});
Required.args = {
    required: true,
    label: "Hello World",
};

export const Error = Template.bind({});
Error.args = {
    error: true,
    label: "Error",
    defaultValue: "Hello World",
    helperText: "Incorrect entry.",
};

export const ActiveResize = Template.bind({});
ActiveResize.args = {
    helperText: "Some important Text",
    label: "Standard",
    rows: 0,
    rowsMax: 4,
    multiline: true,
};
