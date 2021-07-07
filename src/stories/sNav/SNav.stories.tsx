import * as React from "react";
import { Story } from "@storybook/react";

import { SNav } from "../../components";
import { navMockMenu } from "./mock";

export default {
    title: "React/SNav",
    component: SNav,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SNav>;

const placeholderStyle: React.CSSProperties = { background: "red", textAlign: "center", padding: ".5rem" };

const leftElement = <div style={placeholderStyle}>LEFT</div>;
const rightElement = <div style={placeholderStyle}>DESK RIGHT</div>;
const bottomElement = <div style={placeholderStyle}>MOBILE BOTTOM</div>;

const Template: Story<PropsType> = (args) => <SNav {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    menu: navMockMenu,
    left: leftElement,
    desktopRight: rightElement,
    mobileBottom: bottomElement,
};
