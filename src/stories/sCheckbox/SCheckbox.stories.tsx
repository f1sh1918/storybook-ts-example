import { Story } from "@storybook/react";
import React, { useState } from "react";
import { SCheckbox } from "../../components";

export default {
    title: "React/SCheckbox",
    component: SCheckbox,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SCheckbox>;
const Template: Story<PropsType> = (args) => {
    const [checked, setChecked] = useState(false);
    return <SCheckbox {...args} checked={checked} setChecked={setChecked} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
    id: "someID",
    label: "Checkbox Label",
    disabled: false,
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
    id: "someIDDisabled",
    label: "Checkbox Label",
    disabled: true,
};
