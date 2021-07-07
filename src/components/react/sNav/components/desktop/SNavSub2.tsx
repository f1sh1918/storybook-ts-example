import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { NavigationItemModel } from "../../models";

interface sNavSubSubProps {
    items: NavigationItemModel[];
    parentKey: string;
}

export function SNavSub2(props: sNavSubSubProps) {
    return (
        <TransitionGroup>
            <CSSTransition timeout={400} classNames="slide" key={props.parentKey}>
                <ul className={`sNav__sub__list__sub__list py1 px0`}>
                    {props.items?.map((item, index) => {
                        return (
                            <li key={`${item.Name}${index}`} className="sNav__sub__item mb8">
                                <a className="sNav__sub__list__sub__list__text" href={item.Link.Url ? window.location.href : ""}>
                                    {item.Name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </CSSTransition>
        </TransitionGroup>
    );
}
