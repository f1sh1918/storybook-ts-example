import * as React from "react";

import "./index.scss";

export default {
    title: "Base/Typography",
    argTypes: {},
};

export const sizes = () => {
    return (
        <div className="row">
            <div className="spread col-6">
                <div className="font-body1 family-one">.font-body1</div>
                <div className="font-body2 family-one">.font-body2</div>
                <div className="font-body3 family-one">.font-body3</div>

                <div className="font-h1 family-one">.font-h1</div>
                <div className="font-h2 family-one">.font-h2</div>
                <div className="font-h3 family-one">.font-h3</div>
                <div className="font-h4 family-one">.font-h4</div>
                <div className="font-h5 family-one">.font-h5</div>
                <div className="font-h6 family-one">.font-h6</div>
                <div className="font-h7 family-one">.font-h7</div>
                <div className="font-h8 family-one">.font-h8</div>

                <div className="font-sub-h1 family-one">.font-sub-h1</div>
                <div className="font-sub-h2 family-one">.font-sub-h2</div>
                <div className="font-sub-h3 family-one">.font-sub-h3</div>
                <div className="font-sub-h4 family-one">.font-sub-h4</div>
            </div>
            <div className="spread col-6">
                <div className="font-body1-mobile family-one">.font-body1-mobile</div>
                <div className="font-body2-mobile family-one">.font-body2-mobile</div>
                <div className="font-body3-mobile family-one">.font-body3-mobile</div>

                <div className="font-h1-mobile family-one">.font-h1-mobile</div>
                <div className="font-h2-mobile family-one">.font-h2-mobile</div>
                <div className="font-h3-mobile family-one">.font-h3-mobile</div>
                <div className="font-h4-mobile family-one">.font-h4-mobile</div>
                <div className="font-h5-mobile family-one">.font-h5-mobile</div>
                <div className="font-h6-mobile family-one">.font-h6-mobile</div>
                <div className="font-h7-mobile family-one">.font-h7-mobile</div>
                <div className="font-h8-mobile family-one">.font-h8-mobile</div>

                <div className="font-sub-h1-mobile family-one">.font-sub-h1-mobile</div>
                <div className="font-sub-h2-mobile family-one">.font-sub-h2-mobile</div>
                <div className="font-sub-h3-mobile family-one">.font-sub-h3-mobile</div>
                <div className="font-sub-h4-mobile family-one">.font-sub-h4-mobile</div>
            </div>
        </div>
    );
};

export const family = () => {
    return (
        <div className="row">
            <div className="spread col-6">
                <div className="font-h1 family-one">.font-h1 .family-one</div>
                <div className="font-h2 family-one">.font-h2 .family-one</div>
                <div className="font-h3 family-one">.font-h3 .family-one</div>
                <div className="font-h4 family-one">.font-h4 .family-one</div>
                <div className="font-h5 family-one">.font-h5 .family-one</div>
                <div className="font-h6 family-one">.font-h6 .family-one</div>
                <div className="font-h7 family-one">.font-h7 .family-one</div>
                <div className="font-h8 family-one">.font-h8 .family-one</div>
            </div>
            <div className="spread col-6">
                <div className="font-h1 family-sharp">.font-h1 .family-sharp</div>
                <div className="font-h2 family-sharp">.font-h2 .family-sharp</div>
                <div className="font-h3 family-sharp">.font-h3 .family-sharp</div>
                <div className="font-h4 family-sharp">.font-h4 .family-sharp</div>
                <div className="font-h5 family-sharp">.font-h5 .family-sharp</div>
                <div className="font-h6 family-sharp">.font-h6 .family-sharp</div>
                <div className="font-h7 family-sharp">.font-h7 .family-sharp</div>
                <div className="font-h8 family-sharp">.font-h8 .family-sharp</div>
            </div>
        </div>
    );
};

export const weight = () => {
    return (
        <div className="row">
            <div className="spread col-6">
                <div className="font-h1 family-one thin">.font-h1 .thin</div>
                <div className="font-h2 family-one thin">.font-h2 .thin</div>
                <div className="font-h3 family-one thin">.font-h3 .thin</div>
                <div className="font-h4 family-one thin">.font-h4 .thin</div>
                <div className="font-h5 family-one thin">.font-h5 .thin</div>
                <div className="font-h6 family-one thin">.font-h6 .thin</div>
                <div className="font-h7 family-one thin">.font-h7 .thin</div>
                <div className="font-h8 family-one thin">.font-h8 .thin</div>
            </div>
            <div className="spread col-6">
                <div className="font-h1 family-one bold">.font-h1 .bold</div>
                <div className="font-h2 family-one bold">.font-h2 .bold</div>
                <div className="font-h3 family-one bold">.font-h3 .bold</div>
                <div className="font-h4 family-one bold">.font-h4 .bold</div>
                <div className="font-h5 family-one bold">.font-h5 .bold</div>
                <div className="font-h6 family-one bold">.font-h6 .bold</div>
                <div className="font-h7 family-one bold">.font-h7 .bold</div>
                <div className="font-h8 family-one bold">.font-h8 .bold</div>
            </div>
        </div>
    );
};

