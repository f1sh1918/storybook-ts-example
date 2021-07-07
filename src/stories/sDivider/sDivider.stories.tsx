import React from "react";
import { Container } from "react-bootstrap";
import { Story } from "@storybook/react";

import { SDivider } from "../../components";

export default {
    title: "React/SDivider (PD)",
    component: SDivider,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SDivider>;
const Template: Story<PropsType> = (args) => (
    <Container style={{ background: "antiquewhite", height: "200px" }}>
        <div>Some Text</div>
        <SDivider {...args} />
    </Container>
);
export const Divider = Template.bind({});
Divider.args = {
    className: "m0",
    fullWidth: true,
};
