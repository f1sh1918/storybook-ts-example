import * as React from "react";

import { NavigationItemModel } from "../../models";

export interface ISNavRootProps {
    items: NavigationItemModel[];
    onSelected: (selected?: number) => void;
    selected?: number;
}

export class SNavMain extends React.PureComponent<ISNavRootProps> {
    constructor(props: ISNavRootProps) {
        super(props);
        this.state = {
            selected: this.props.selected,
        };
    }

    onSelected(selected: number) {
        this.props.onSelected(selected);
    }

    public render() {
        const navItems = this.props.items.map((item, index) => {
            return (
                <li
                    key={`${item.Name}${index}`}
                    className={`sNav__desktop__item ${index === this.props.selected ? "active" : ""}`}
                    onMouseEnter={() => this.onSelected(index)}
                    onMouseLeave={() => {
                        !item.Children?.length && this.props.onSelected();
                    }}
                >
                    <span className="sNav__desktop__item__text">{item.Name}</span>
                </li>
            );
        });
        return <ul className="sNav__desktop py6">{navItems}</ul>;
    }
}
