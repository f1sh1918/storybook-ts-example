import classNames from "classnames";
import React from "react";
import { Spinner } from "react-bootstrap";

/**
 * @param children: button text must (expected as plain text or wrapped in <span>) and icon can be passed as children
 * @param iconPosition: icon-before, icon-after
 * @param className: btn-label | btn-underline-black | btn-underline-white | btn-transparent | btn-black | btn-blue
 *
 * Example Implementation
 * <ButtonV2 className={"btn-transparent"} iconPosition={"icon-after"} disabled={true}>
 Test
 <IconV2 xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium black"}/>
 </ButtonV2>
 */

interface ISButtonProps {
    /**
     * You can pass children like a label or icon
     */
    children?: React.ReactNode;
    /**
     * btn-label | btn-underline-black | btn-underline-white | btn-transparent | btn-black | btn-blue
     */
    className?: "btn-label" | "btn-underline-black" | "btn-underline-white" | "btn-transparent" | "btn-black" | "btn-blue" | string;
    disabled?: boolean;
    /**
     * set a margin for the icon whether its before or after
     * icon-before | icon-after
     */
    iconPosition?: string;
    /**
     * shows spinner
     */
    isLoading?: boolean;
    /**
     * pass a function to be called on button click event
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SButton: React.FunctionComponent<ISButtonProps> = ({ children, className, disabled, iconPosition, isLoading, onClick }) => (
    <button
        onClick={onClick}
        className={classNames("btn-v2", { disabled: isLoading || disabled }, iconPosition, className)}
        disabled={isLoading || disabled}
    >
        {children}
        {isLoading && <Spinner as="span" role="status" animation="border" size="sm" className="ml-1" />}
    </button>
);
export default SButton;
