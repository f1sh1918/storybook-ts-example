import { SIcon } from "../../index";

export default {
    title: "HTML/Filter chip",
};
export const ChipDesktop = (args) => (
    <section>
        <h6>Filter Chip Desktop</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="filter-chip icon-after">
                    <span class="btn__text">FilterTag</span>
                    <SIcon xlinkHref={"/images/icons/12px/CancelClose12px.svg#cancelclose12px-a"} className={"small black"} />
                </button>
            </div>
            <div class="col-2">
                <button class="filter-chip icon-after hover">
                    <span class="btn__text">FilterTag</span>
                    <SIcon xlinkHref={"/images/icons/12px/CancelClose12px.svg#cancelclose12px-a"} className={"small black"} />
                </button>
            </div>
        </div>
    </section>
);

export const ChipMobile = (args) => (
    <section>
        <h6>Filter Chip Mobile</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="filter-chip icon-after mobile">
                    <span class="btn__text">FilterTag</span>
                    <SIcon xlinkHref={"/images/icons/12px/CancelClose12px.svg#cancelclose12px-a"} className={"small black"} />
                </button>
            </div>
            <div class="col-2">
                <button class="filter-chip icon-after mobile hover">
                    <span class="btn__text">FilterTag</span>
                    <SIcon xlinkHref={"/images/icons/12px/CancelClose12px.svg#cancelclose12px-a"} className={"small black"} />
                </button>
            </div>
        </div>
    </section>
);
