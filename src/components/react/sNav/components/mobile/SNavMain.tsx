import * as React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import SButton from "../../../sButton/SButton";
import SIcon from "../../../sIcon/SIcon";
import { NavigationItemModel } from "../../models";
import { Category } from "../category";
import { SNavSub } from "./SNavSub";

export interface ISNavMainProps {
    items: NavigationItemModel[];
    mobileBottom?: React.ReactNode;
    onClose: () => void;
}

export interface ISNavMainState {
    selectedIndex?: number;
}

export class SNavMain extends React.Component<ISNavMainProps, ISNavMainState> {
    constructor(props: ISNavMainProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const navItems: React.ReactNode = this.props.items.map((item, index) => {
            return item.Children?.length ? (
                <li
                    key={`${item.Name}${index}`}
                    className={`sNav__mobile__nav__item py4`}
                    onClick={() => {
                        this.setState({ selectedIndex: index });
                    }}
                >
                    <div className="row">
                        <div className="col-9 sNav__mobile__nav__item__text font-sub-h2-mobile">{item.Name}</div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-1"} />
                        </div>
                    </div>
                </li>
            ) : (
                <li key={`${item.Name}${index}`} className={`sNav__mobile__nav__item py4`}>
                    <a className="sNav__mobile__nav__item__link animated_link font-sub-h2-mobile" href={item.Link.Url || ""}>
                        {item.Name}
                    </a>
                </li>
            );
        });
        const navControls: React.ReactNode = (
            <div className="row py2 mb4">
                <div className="col-6">
                    {this.state.selectedIndex !== undefined && (
                        <SButton
                            className="btn-icon large ml4"
                            onClick={() => {
                                this.setState({ selectedIndex: undefined });
                            }}
                        >
                            <SIcon xlinkHref={"/images/icons/24px/Backward24px.svg#backward24px-a"} className={"large gray-1"} />
                        </SButton>
                    )}
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <SButton className="btn-icon large mr4" onClick={this.props.onClose}>
                        <SIcon xlinkHref={"/images/icons/24px/CancelClose24px.svg#cancelclose24px-a"} className={"large gray-1"} />
                    </SButton>
                </div>
            </div>
        );

        const navSubSelected = this.state.selectedIndex !== undefined ? this.props.items[this.state.selectedIndex] : undefined;
        const navSubItems = navSubSelected && <SNavSub item={this.props.items[this.state.selectedIndex!]} />;

        return (
            <div className="sNav__mobile">
                <div className="sNav__mobile__wrapper">
                    <div className="sNav__mobile__wrapper__actions">{navControls}</div>
                    <SwitchTransition >
                        {!navSubSelected ? (
                            <CSSTransition in unmountOnExit timeout={300} classNames="slide-left" key="left">
                                <div className="sNav__mobile__wrapper__content">
                                    <ul className="sNav__mobile__nav px6 ">{navItems}</ul>
                                    <div className="divider mx6 mt4"></div>
                                    <div className="mt8 px6">{this.props.mobileBottom}</div>
                                </div>
                            </CSSTransition>
                        ) : (
                            <CSSTransition in unmountOnExit timeout={300} classNames="slide-right" key="right">
                                <div className="sNav__mobile__wrapper__content">
                                    <ul className="sNav__mobile__nav px6 ">{navSubItems}</ul>
                                    <div className="px6 mt6">
                                        <Category category={navSubSelected!} />
                                    </div>
                                </div>
                            </CSSTransition>
                        )}
                    </SwitchTransition>
                </div>
            </div>
        );
    }
}
