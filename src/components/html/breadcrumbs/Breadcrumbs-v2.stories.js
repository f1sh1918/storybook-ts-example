import { SIcon } from "../../index";

export default {
    title: "HTML/Breadcrumb v2",
};
/*
This Page shows the three different states of breadcrumb items
 */

export const breadCrumbItem = (args) => (
    <section>
        <h6>Item</h6>
        <div class="row storybook-description">
            <span className="col-3">Normal</span> <span class="col-3">Hover</span>
            <span class="col-3">Disabled(Non-selectable)</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <li class="breadcrumb-v2-item">
                    Item
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
            </div>
            <div className="col-3">
                <li class="breadcrumb-v2-item">
                    <a href="#example">Item</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
            </div>
            <div className="col-3">
                <li className="breadcrumb-v2-item active">
                    Item
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
            </div>
        </div>
    </section>
);

export const breadCrumbDesktop = (args) => (
    <section>
        <h6>Desktop</h6>
        <div className="row storybook-separator">
            <ul className="breadcrumb-v2-section px-4 py-3">
                <li className="breadcrumb-v2-item">
                    <a href="#exampleexample">Level 0</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item active">Level 1</li>
            </ul>
        </div>
        <div className="row storybook-separator">
            <ul className="breadcrumb-v2-section px-4 py-3">
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 0</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 1</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item active">Current Location</li>
            </ul>
        </div>
        <div className="row storybook-separator">
            <ul className="breadcrumb-v2-section px-4 py-3">
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 0</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 1</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 2</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item active">Current Location</li>
            </ul>
        </div>
        <div className="row storybook-separator">
            <ul className="breadcrumb-v2-section px-4 py-3">
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 0</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 1</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 2</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 3</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item active">Current Location</li>
            </ul>
        </div>
        <div className="row storybook-separator">
            <ul className="breadcrumb-v2-section px-4 py-3">
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 0</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 1</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 2</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 3</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item">
                    <a href="#example">Level 4</a>
                    <span className="breadcrumb-v2-seperator">
                        <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-6"} />
                    </span>
                </li>
                <li className="breadcrumb-v2-item active">Current Location</li>
            </ul>
        </div>
    </section>
);
