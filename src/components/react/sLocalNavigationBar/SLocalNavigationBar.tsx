import React from "react";
import classNames from "classnames";

import SDivider from "../sDivider/SDivider";

export interface ISLocalNavigationBar {
    className?: string;
    leftTopPanel?: React.ReactNode;
    rightTopPanel?: React.ReactNode;
    bottomPanel?: React.ReactNode;
    title: string;
}

const SLocalNavigationBar: React.FunctionComponent<ISLocalNavigationBar> = ({
    className,
    title,
    bottomPanel,
    leftTopPanel,
    rightTopPanel,
}) => {
    return (
        <div className={classNames("s-lnb", className)}>
            <div className="s-lnb__top d-flex">
                <div className="s-lnb__top__title d-flex mr4 py2">{title}</div>
                {leftTopPanel && <div className="s-lnb__top__panel__left d-flex p2">{leftTopPanel}</div>}
                <div className={classNames("s-lnb__top__panel__right d-flex p2")}>{rightTopPanel}</div>
            </div>
            <SDivider fullWidth className="m0" />
            <div className="s-lnb__bottom d-flex p2">{bottomPanel}</div>
        </div>
    );
};

export default SLocalNavigationBar;
