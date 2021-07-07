import React from "react";
import { Story } from "@storybook/react";
import { Container } from "react-bootstrap";

import { SCard, SIcon, SPopover } from "../../components";

export default {
    title: "React/SCard (PD)",
    component: SCard,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SCard>;

const Template: Story<PropsType> = (args) => (
    <Container>
        <SCard {...args} />
    </Container>
);

export const CompanyProfileSimple = Template.bind({});

CompanyProfileSimple.args = {
    className: "my2",
    headerClass: "p6",
    bodyClass: "p6",
    cardHeader: (
        <div className="d-flex justify-content-end">
            <span className="mr1 font-body2 family-one" style={{ fontWeight: "bold" }}>
                Firmenprofil bearbeiten
            </span>
            <SIcon className="black medium" xlinkHref="/images/icons/16px/Edit16px.svg#edit16px-a" />
        </div>
    ),
    cardBody: <div>Some Content</div>,
};

const TemplateComplex: Story<PropsType> = (args) => {
    const triggerItem = (
        <button className={"btn-v2 btn-label"}>
            <SIcon xlinkHref={"/images/icons/12px/Info12px.svg#path-1"} className={"small black"} />
        </button>
    );
    const popoverContent = <div>Vom Zeitpunkt eines Kaufes an kann es bis zu 10 Tage dauern bis Umsätze angezeigt werden.</div>;
    const cardHeader = (
        <div className="d-flex justify-content-start font-body3 family-one">
            Umsatzübersicht
            <SPopover overlayClass="ml1" placement="bottom" id="test" trigger="focus" content={popoverContent} triggerItem={triggerItem} />
        </div>
    );
    return (
        <Container>
            <SCard {...args} cardHeader={cardHeader} />
        </Container>
    );
};

export const AccountStatement = TemplateComplex.bind({});

AccountStatement.args = {
    className: "my2",
    headerClass: "p6",
    bodyClass: "p6",
    cardBody: <div>Some Content</div>,
};
