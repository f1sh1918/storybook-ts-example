import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Story } from "@storybook/react";

import {SButton, SDropdown, SLocalNavigationBar, SNavTab} from "../../components";
import { navItems } from "../sNavTab/mock/navItems";
import {ISLocalNavigationBar} from "../../components/react/sLocalNavigationBar/SLocalNavigationBar";

export default {
    title: "React/SLocalNavigationBar (PD)",
    component: SLocalNavigationBar,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SLocalNavigationBar>;
const Template: Story<PropsType> = (args) => {
    const [activeItem, setActiveItem] = useState(0);

    const rightTopPanel = <SNavTab navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} />;

    return (
        <Container className="container-xxl">
            <SLocalNavigationBar {...args} rightTopPanel={rightTopPanel} />
        </Container>
    );
};
export const LNBSimple = Template.bind({});
LNBSimple.args = {
    title: "Title",
};

const TemplateDropdown: Story<PropsType> = (args: ISLocalNavigationBar) => {
    const [dropdownValue, setDropdownValue] = useState<string>("");

    const leftTopPanel = (
        <div className={"Dropdown-Wrapper d-flex"} style={{ alignSelf: "center" }}>
            <SDropdown
                className={"d-flex mr4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
            <SDropdown
                className={"d-flex mx4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
            <SDropdown
                className={"d-flex mx4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
        </div>
    );

    return (
        <Container className="container-xxl">
            <SLocalNavigationBar {...args} leftTopPanel={leftTopPanel} />
        </Container>
    );
};
export const LNBSimpleDropdown = TemplateDropdown.bind({});
LNBSimpleDropdown.args = {
    title: "Title",
};

const TemplateComplex: Story<PropsType> = (args: ISLocalNavigationBar) => {
    const [activeItem, setActiveItem] = useState(0);
    const [dropdownValue, setDropdownValue] = useState<string>("");
    const bottomPanel = <SNavTab navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} />;
    const rightTopPanel = (
        <div>
            <SButton className="btn-black mx2">Sample Button</SButton>
            <SButton className="btn-black mx2">Sample Button</SButton>
        </div>
    );
    const leftTopPanel = (
        <div className={"Dropdown-Wrapper d-flex"} style={{ alignSelf: "center" }}>
            <SDropdown
                className={"d-flex mr4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
            <SDropdown
                className={"d-flex mx4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
            <SDropdown
                className={"d-flex mx4"}
                setDropdownValue={setDropdownValue}
                value={dropdownValue}
                defaultTextForSelect="Model Code"
                items={[{ id: "Test", label: "Test" }]}
            />
        </div>
    );
    return (
        <Container className="container-xxl">
            <SLocalNavigationBar {...args} leftTopPanel={leftTopPanel} rightTopPanel={rightTopPanel} bottomPanel={bottomPanel} />
        </Container>
    );
};
export const LNBComplex = TemplateComplex.bind({});
LNBComplex.args = {
    title: "Title",
};
