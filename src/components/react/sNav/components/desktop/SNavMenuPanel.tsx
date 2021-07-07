import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { NavigationItemModel } from "../../models";
import { SNavSub1 } from "./SNavSub1";

export interface ISNavMenuPanelProps {
    parent?: NavigationItemModel;
    items?: NavigationItemModel[];
    onClose: () => void;
}

export const SNavMenuPanel: React.FunctionComponent<ISNavMenuPanelProps> = (props: ISNavMenuPanelProps) => {
    const shouldRenderMenu: boolean = Boolean(props.parent && props.items?.length);
    return (
        <TransitionGroup childFactory={(child) => React.cloneElement(child)}>
            {shouldRenderMenu ? (
                <CSSTransition in unmountOnExit timeout={400} classNames="slide-down">
                    <div>
                        <CSSTransition in appear timeout={600} classNames="fade" key={props.parent!.Name}>
                            <SNavSub1 items={props.items || []} parent={props.parent!} onClose={props.onClose} />
                        </CSSTransition>
                    </div>
                </CSSTransition>
            ) : null}
        </TransitionGroup>
    );
};
