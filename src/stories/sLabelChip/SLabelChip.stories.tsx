import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SLabelChip } from "../../components";

export default {
    title: "React/SLabelChip (PD)",
    component: SLabelChip,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SLabelChip>;

const Template: Story<PropsType> = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <SLabelChip {...args} activeItem={activeIndex} handleChipChange={setActiveIndex} />;
};

export const LabelChips = Template.bind({});

LabelChips.args = {
    labelItems: [
        { label: "Demo", disabled: true },
        { label: "Project", autoChecked: true },
    ],
    groupName: "TestGroup",
};
