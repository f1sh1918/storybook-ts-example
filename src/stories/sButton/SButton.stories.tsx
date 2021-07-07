import { Story } from "@storybook/react";
import React from "react";

import { SButton, SIcon } from "../../components";

export default {
    title: "React/SButton (PD)",
    component: SButton,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SButton>;

const Template: Story<PropsType> = (args) => <SButton {...args} />;

export const Transparent = Template.bind({});
Transparent.args = {
    className: "btn-transparent",
    isLoading: false,
    disabled: false,
    children: "Sample label",
};

export const Black = Template.bind({});
Black.args = {
    className: "btn-black",
    isLoading: false,
    disabled: false,
    children: "Sample label",
};

export const Blue = Template.bind({});
Blue.args = {
    className: "btn-blue",
    isLoading: false,
    disabled: false,
    children: "Sample label",
};

const TemplateBlack: Story<PropsType> = (args: PropsType) => {
    return (
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
            <SButton {...args} />
        </div>
    );
};

export const UnderlineLight = TemplateBlack.bind({});
UnderlineLight.args = {
    className: "btn-underline-white",
    isLoading: false,
    disabled: false,
    children: <span className="btn__text">Sample label</span>,
};

export const UnderlineDark = Template.bind({});
UnderlineDark.args = {
    className: "btn-underline-black",
    isLoading: false,
    disabled: false,
    children: <span className="btn__text">Sample label</span>,
};

export const UnderlineAnimated = Template.bind({});
UnderlineAnimated.args = {
    className: "btn-animated",
    isLoading: false,
    disabled: false,
    children: <span className="btn__text">Sample label</span>,
};

export const UnderlineAnimatedSmall = Template.bind({});
UnderlineAnimatedSmall.args = {
    className: "btn-underline-animated",
    isLoading: false,
    disabled: false,
    children: <span className="btn__text">Sample label</span>,
};

export const LabelButton = Template.bind({});
LabelButton.args = {
    className: "btn-label icon-after",
    isLoading: false,
    disabled: false,
    children: (
        <>
            <span className="btn__text">Sample label</span>
            <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium black"} />
        </>
    ),
};

export const ButtonTransparent = Template.bind({});
ButtonTransparent.args = {
    className: "btn-transparent icon-after",
    isLoading: false,
    disabled: false,
    children: (
        <>
            <span className="btn__text">Sample label</span>
            <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium black"} />
        </>
    ),
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
    className: "btn-icon large",
    isLoading: false,
    disabled: false,
    children: <SIcon xlinkHref={"/images/icons/24px/NextForward24px.svg#nextforward24px-a"} className={"large black"} />,
};
