import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SIcon from "../sIcon/SIcon";

export interface IExpandableItem {
    isOpened?: boolean;
    title?: string;
    child?: React.ReactNode;
}

export interface ISExpandableProps {
    items: IExpandableItem[];
}

export interface ISExpandableState {
    activeIndex?: number;
}

export default class SExpandable extends React.Component<ISExpandableProps, ISExpandableState> {
    constructor(props: ISExpandableProps) {
        super(props);
        this.state = { activeIndex: this.props.items.findIndex((item) => item.isOpened) };
    }

    readonly arrowUp = (
        <SIcon
            xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"}
            className={"medium black s-expandable__item__header__icon"}
        />
    );

    onHeaderClick = (index: number) => {
        this.setState({ activeIndex: this.state.activeIndex === index ? undefined : index });
    };

    public render() {
        return (
            <div className="s-expandable">
                {this.props.items.map((item, index) => {
                    return (
                        <div
                            className={`s-expandable__item ${
                                this.state.activeIndex === index ? "s-expandable__item--active" : "s-expandable__item--inactive"
                            }`}
                            key={index}
                        >
                            <div
                                className="s-expandable__item__header font-sub-h2-mobile"
                                onClick={() => {
                                    this.onHeaderClick(index);
                                }}
                            >
                                <div>{item.title}</div>
                                <div>{this.arrowUp}</div>
                            </div>
                            <TransitionGroup childFactory={(child) => React.cloneElement(child)}>
                                {this.state.activeIndex === index && (
                                    <CSSTransition in timeout={{exit: 100, enter: 500}} classNames="slide-up-down">
                                        <div className="s-expandable__item__body pb6">{item.child}</div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </div>
                    );
                })}
            </div>
        );
    }
}
