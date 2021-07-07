import { Story } from "@storybook/react";
import React from "react";

import { SExpandable } from "../../components";

type PropsType = React.ComponentProps<typeof SExpandable>;

export default {
    title: "React/SExpandable",
    component: SExpandable,
    argTypes: {},
};

const wrapperStyles: React.CSSProperties = {
    width: "450px",
    padding: "1rem",
    background: "lightgray",
};

const Template: Story<PropsType> = (args) => {
    return (
        <div style={wrapperStyles}>
            <SExpandable {...args} />
        </div>
    );
};
export const Basic = Template.bind({});

Basic.args = {
    items: [
        {
            title: "Waschen und Trocknen",
            isOpened: false,
            child: (
                <ul>
                    <li>Übersicht</li>
                    <li>QuickDrive</li>
                    <li>Waschmaschinen</li>
                    <li>Waschtrockner</li>
                    <li>Trockner</li>
                </ul>
            ),
        },
        {
            title: "Mikrowellen",
            isOpened: true,
            child: (
                <ul>
                    <li>Übersicht</li>
                    <li>QuickDrive</li>
                    <li>Waschmaschinen</li>
                    <li>Waschtrockner</li>
                    <li>Trockner</li>
                </ul>
            ),
        },
        {
            title: "Staubsauger",
            child: (
                <ul>
                    <li>Übersicht</li>
                    <li>QuickDrive</li>
                    <li>Waschmaschinen</li>
                    <li>Waschtrockner</li>
                    <li>Trockner</li>
                </ul>
            ),
        },
    ],
};
