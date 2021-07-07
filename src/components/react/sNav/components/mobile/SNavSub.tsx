import * as React from "react";

import { SExpandable } from "../../../sExpandable";
import { NavigationItemModel } from "../../models";

export interface ISNavSubProps {
    item: NavigationItemModel;
}

export class SNavSub extends React.PureComponent<ISNavSubProps> {
    public render() {
        return (
            <div>
                <h5 className="font-h5-mobile family-sharp bold my4">{this.props.item.Name}</h5>
                {this.props.item.Children?.length && (
                    <SExpandable
                        items={this.props.item.Children!.map((current) => {
                            return {
                                title: current.Name!,
                                child: (
                                    <div key={current.Name}>
                                        {current.Children?.map((currentSub) => {
                                            return (
                                                <a
                                                    className="sNav__mobile__sub__link d-block font-sub-h4-mobile thin family-one py3 "
                                                    key={currentSub.Name}
                                                    href={currentSub.CategoryImage.Url!}
                                                >
                                                    {currentSub.Name}
                                                </a>
                                            );
                                        })}
                                    </div>
                                ),
                            };
                        })}
                    />
                )}
            </div>
        );
    }
}
