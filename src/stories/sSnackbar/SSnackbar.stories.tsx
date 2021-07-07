import React from "react";
import { Story } from "@storybook/react";

import { SSnackbar } from "../../components";

export default {
    title: "React/SSnackbar (PD)",
    component: SSnackbar,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SSnackbar>;

const Template: Story<PropsType> = (args) => <SSnackbar {...args} />;

export const Snackbar = Template.bind({});
Snackbar.args = {
    eventMessage: "Informational notification",
    closeButton: true,
    closeButtonText: "Close",
};
