import * as React from "react";

import SButton from "../sButton/SButton";
import SIcon from "../sIcon/SIcon";
import { SNavMainDesktop, SNavMenuPanelDesktop } from "./components/desktop";
import { SNavMainMobile } from "./components/mobile";
import { NavigationItemModel } from "./models";

export interface SNavProps {
    menu: NavigationItemModel[];
    left?: React.ReactNode;
    desktopRight?: React.ReactNode;
    mobileBottom?: React.ReactNode;
}

export interface SNavState {
    selected?: number;
    shouldMobilePanelOpen?: boolean;
}

export class SNav extends React.Component<SNavProps, SNavState> {
    constructor(props: SNavProps) {
        super(props);
        this.state = { shouldMobilePanelOpen: false };
    }

    updateSelection = (index?: number) => {
        this.setState({ selected: index });
    };

    public render() {
        const shouldOpenDesktopPanel = this.state.selected !== undefined && this.props.menu[this.state.selected!]?.Children;
        const shouldOpenMobilePanel = this.state.shouldMobilePanelOpen;

        return (
            <>
                {/* Desktop */}
                <div
                    className="sNav d-none d-lg-block"
                    onMouseLeave={() => {
                        this.updateSelection();
                    }}
                >
                    <div className={`sNav__cover ${shouldOpenDesktopPanel ? "active" : ""}`}></div>
                    <div className="sNav__wrapper">
                        <div className="container container-xxl">
                            <div className="row align-items-center">
                                <div className="col-2">{this.props.left}</div>
                                <div className="col-8 nav-content">
                                    <SNavMainDesktop
                                        selected={this.state.selected}
                                        items={this.props.menu}
                                        onSelected={(selected) => this.updateSelection(selected)}
                                    />
                                </div>
                                <div className="col-2">{this.props.desktopRight}</div>
                            </div>
                        </div>
                        <SNavMenuPanelDesktop
                            onClose={() => this.setState({ selected: undefined })}
                            items={shouldOpenDesktopPanel ? this.props.menu[this.state.selected!]?.Children! : []}
                            parent={this.props.menu[this.state.selected!]}
                        />
                    </div>
                </div>
                {/* Mobile */}
                <div className="sNav d-block d-lg-none">
                    <div className={`sNav__cover ${shouldOpenMobilePanel ? "active" : ""}`}></div>
                    <div className="sNav__wrapper leveled py2">
                        <div className="container container-xxl">
                            <div className="row align-items-center">
                                <div className="col-10">{this.props.left}</div>
                                <div className="col-2 d-flex justify-content-end">
                                    <SButton
                                        className="btn-icon large"
                                        onClick={() => {
                                            this.setState({ shouldMobilePanelOpen: true });
                                        }}
                                    >
                                        <SIcon className="large black" xlinkHref="/images/icons/24px/Drawer24px.svg#drawer24px-a" />
                                    </SButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    {shouldOpenMobilePanel && (
                        <SNavMainMobile
                            items={this.props.menu}
                            onClose={() => this.setState({ shouldMobilePanelOpen: false })}
                            mobileBottom={this.props.mobileBottom}
                        />
                    )}
                </div>
            </>
        );
    }
}
