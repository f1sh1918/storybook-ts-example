// Does not exist as component, in base it is <a> element modified by classes it gets

import { SIcon } from "../../index";

export default {
    title: "HTML/Hyperlink v2",
};

export const hyperlink = (args) => (
    <section>
        <h6>Hyperlink</h6>
        <div class="row storybook-description">
            <span class="col-2">Big</span> <span class="col-2">Medium</span>
            <span class="col-2">Small</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <a class="v2 big" href="#example">
                    Sample label
                </a>
            </div>
            <div class="col-2">
                <a class="v2 medium" href="#example">
                    Sample label
                </a>
            </div>
            <div class="col-2">
                <a class="v2 small" href="#example">
                    Sample label
                </a>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <a class="v2 big" href="#example">
                    Sample label
                    <SIcon xlinkHref={"/images/icons/24px/Outlink24px.svg#outlink24px-a"} className={"large blue"} />
                </a>
            </div>
            <div class="col-2">
                <a class="v2 medium" href="#example">
                    Sample label
                    <SIcon xlinkHref={"/images/icons/16px/Outlink16px.svg#outlink16px-a"} className={"medium blue"} />
                </a>
            </div>
            <div class="col-2">
                <a class="v2 small" href="#example">
                    Sample label
                    <SIcon xlinkHref={"/images/icons/12px/Outlink12px.svg#outlink12px-a"} className={"small blue"} />
                </a>
            </div>
        </div>
    </section>
);
