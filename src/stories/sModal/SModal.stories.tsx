import React, { useState } from "react";
import { Story } from "@storybook/react";

import { SButton, SModal } from "../../components";

export default {
    title: "React/SModal",
    component: SModal,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SModal>;

const Template: Story<PropsType> = (args) => {
    const [show, setShow] = useState(true);
    return <SModal {...args} show={show} closeButtonOnClick={setShow} onHide={() => setShow(false)} />;
};

export const Modals = Template.bind({});

Modals.args = {
    headerNode: (
        <div>
            <h4>Headline</h4>
        </div>
    ),
    children: (
        <div>
            <h6>TEST</h6>
            <p>test</p>
            <p>test</p>
        </div>
    ),
    footerNode: (
        <div style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            <SButton className="btn-transparent w-50 mr-4">BUTTON 1</SButton>
            <SButton className="btn-black w-50">BUTTON 2</SButton>
        </div>
    ),
};
