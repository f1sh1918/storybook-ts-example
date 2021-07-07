import classNames from "classnames";
import React from "react";
import { Spinner, SpinnerProps } from "react-bootstrap";
import { Variant } from "react-bootstrap/types";

interface ISSpinnerProps extends SpinnerProps {
    className?: string;
    animation: "border" | "grow";
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | Variant
}

const SSpinner: React.FunctionComponent<ISSpinnerProps> = (props) => {
    const { className, animation, variant } = props;
    return (
        <div className={classNames("d-flex w-100 justify-content-center py12", className)}>
            <Spinner
                {...props}
                animation={animation}
                variant={variant}
            />
        </div>
    );
};

export default SSpinner;
