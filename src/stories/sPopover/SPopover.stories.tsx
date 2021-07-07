import React from "react";
import { Story } from "@storybook/react";

import { SIcon, SPopover } from "../../components";

/*eslint-disable */
export default {
    title: "React/SPopover (PD)",
    component: SPopover,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SPopover>;

const Template: Story<PropsType> = (args) => <SPopover {...args} />;

export const InfoPopover = Template.bind({});
InfoPopover.args = {
    placement: "top",
    id: "price-info-popover",
    triggerItem: (
        <button className={"btn-v2 btn-label"}>
            <SIcon xlinkHref={"/images/icons/12px/Info12px.svg#path-1"} className={"small black"} />
        </button>
    ),
    content: <div className="price-popover-content">InfoText</div>,
    trigger: "focus",
};
