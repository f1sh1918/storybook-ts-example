import React from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";

import { ISCard } from "./models";
import SDivider from "../sDivider/SDivider";

export const SCard: React.FunctionComponent<ISCard> = ({ className, bodyClass, headerClass, cardHeader, cardBody, divider, rounded }) => {
    return (
        <Card className={classNames("s-card", className)}>
            {cardHeader && (
                <Card.Header className={classNames("s-card__header", headerClass, { round: rounded })}>{cardHeader}</Card.Header>
            )}
            {divider && (
                <div className="s-card__divider__wrapper">
                    <SDivider className="s-card__divider m0" />
                </div>
            )}
            <Card.Body className={classNames("s-card__body", bodyClass, { round: rounded }, { "round-full": rounded && !cardHeader })}>
                {cardBody}
            </Card.Body>
        </Card>
    );
};

SCard.defaultProps = {
    rounded: true,
    divider: true,
};

export default SCard;
