import React from "react";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";

interface ISFilterChip {
    /**
     * You can pass children like a label or icon
     */
    children: React.ReactNode;
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * set a margin for the icon whether its before or after
     * icon-before | icon-after
     */
    iconPosition: string;
    /**
     * shows spinner
     */
    isLoading?: boolean;
    /**
     * pass a function to be called on click event
     */
    onClick?: () => void;
}

const SFilterChip: React.FunctionComponent<ISFilterChip> = ({ children, onClick, iconPosition, isLoading, className }) => (
    <button onClick={onClick} className={classNames("filter-chip", iconPosition, className)} disabled={isLoading}>
        {children}
        {isLoading && <Spinner animation="border" as="span" role="status" size="sm" className="ml-2" />}
    </button>
);

export default SFilterChip;
