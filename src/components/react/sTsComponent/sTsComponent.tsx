import * as React from "react";

interface TsComponentProps {
    text: string;
}

const sTsComponent: React.FunctionComponent<TsComponentProps> = (props = { text: "TS COMPONENT" }) => {
    return <h1>{props.text}</h1>;
};

export default sTsComponent;
