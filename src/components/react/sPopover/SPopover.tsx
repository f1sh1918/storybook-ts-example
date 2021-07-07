import React from "react";
import { OverlayTrigger, Popover, PopoverContent } from "react-bootstrap";
import classNames from "classnames";
import { OverlayTriggerType } from "react-bootstrap/OverlayTrigger";
import { Placement } from "react-bootstrap/Overlay";

/**
 * General Info: https://react-bootstrap.github.io/components/overlays/#popovers
 */

interface ISPopover {
    id: string;
    /**
     * Receives React Node with the Content
     */
    content: React.ReactNode;
    /**
     * Provide a class for the overlay
     */
    overlayClass?: string;
    /**
     * Define the placement:
     * 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start'
     */
    placement?: Placement;
    /**
     * Define what triggers the Popover
     * 'hover' | 'click' |'focus' | ('hover' | 'click' |'focus')[]
     */
    trigger?: OverlayTriggerType | OverlayTriggerType[];
    /**
     * Define the trigger it has to be a button
     */
    triggerItem: React.ReactElement;

    className?: string;
}

const SPopover: React.FunctionComponent<ISPopover> = ({ id, content, triggerItem, overlayClass, placement, trigger, className }) => {
    const popover = (
        <Popover className={classNames("popover-v2", className)} id={id}>
            <PopoverContent>{content}</PopoverContent>
        </Popover>
    );
    return (
        <div className={classNames("overlay-wrapper", overlayClass)}>
            <OverlayTrigger overlay={popover} placement={placement} trigger={trigger}>
                {triggerItem}
            </OverlayTrigger>
        </div>
    );
};

export default SPopover;
