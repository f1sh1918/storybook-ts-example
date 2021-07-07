import React from "react";
import classNames from "classnames";

import SNavTabItem, { ISNavItem } from "./sNavTabItem/SNavTabItem";

export interface ISNavTab {
    className?: string;
    navItems: ISNavItem[];
    activeItem: number;
    setActiveItem: (activeItem: number) => void;
}

const SNavTab: React.FunctionComponent<ISNavTab> = ({ className, navItems, setActiveItem, activeItem }) => {
    return (
        <div className="s-navtab__wrapper py1">
            <div className={classNames("s-navtab d-flex", className)}>
                {navItems.map((navItem: ISNavItem, index: number) => (
                    <SNavTabItem
                        key={`${navItem.label}_${navItem.link}`}
                        item={{ link: navItem.link, label: navItem.label }}
                        onSetActiveItem={setActiveItem}
                        activeItem={activeItem}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SNavTab;
