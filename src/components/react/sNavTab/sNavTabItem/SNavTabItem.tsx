import React from "react";
import classNames from "classnames";

export interface ISNavTabItem {
    className?: string;
    item: ISNavItem;
    activeItem?: number;
    onSetActiveItem: (activeIndex: number) => void;
    index: number;
}

export interface ISNavItem {
    link: string;
    label: string;
}

const SNavTabItem: React.FunctionComponent<ISNavTabItem> = ({ className, item, activeItem, onSetActiveItem, index }) => {
    return (
        <div className={classNames("s-navtab-item d-flex", className)} onClick={() => onSetActiveItem(index)}>
            <a
                href={item.link}
                className={classNames("s-navtab-item__link font-body2 family-one", { active: index === activeItem })}
                role="button"
            >
                {item.label}
            </a>
        </div>
    );
};

export default SNavTabItem;
