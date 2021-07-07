import * as React from "react";

import SButton from "../../../sButton/SButton";
import { NavigationItemModel } from "../../models";

export interface ICategoryProps {
    category: NavigationItemModel;
}

interface ICategoryVM {
    style: React.CSSProperties;
    link: NavigationItemModel["Link"];
    text: NavigationItemModel["Text"];
}

export class Category extends React.PureComponent<ICategoryProps> {
    public render() {
        const { category } = this.props;
        const categoryVM: ICategoryVM = {
            style: {
                backgroundImage: `url('${category.CategoryImage.Url}`,
            },
            link: category.Link,
            text: category.Text,
        };

        return (
            <a className="sNav__sub__category" href={categoryVM.link?.Url!} target={categoryVM.link?.Target!}>
                <div className="sNav__sub__category__aspect">
                    <svg viewBox="0 0 1 1"></svg>
                    <div className="sNav__sub__category__image" style={categoryVM.style}></div>
                </div>
                <div className="sNav__sub__category__text mt6"> {categoryVM.text} </div>
                <div className="sNav__sub__category__link mt3">
                    <SButton className="btn-underline-animated">
                        <span className="btn__text">{categoryVM.link?.Name}</span>
                    </SButton>
                </div>
            </a>
        );
    }
}
