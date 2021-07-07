import React from "react";
import classNames from "classnames";

interface ISDivider {
    className?: string;
    fullWidth?: boolean;
}

const SDivider: React.FunctionComponent<ISDivider> = ({ className, fullWidth }) => {
    return <hr className={classNames("s-divider", className, { fullwidth: fullWidth })} />;
};

export default SDivider;
