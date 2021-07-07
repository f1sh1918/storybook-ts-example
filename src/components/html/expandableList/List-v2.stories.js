import { SIcon } from "../../index";

export default {
    title: "HTML/Expandable List  v2",
};

// check https://react-bootstrap.github.io/components/list-group/

export const ExpandableListHead = (args) => (
    <section>
        <h6>Expandable list - header item</h6>
        <div class="row storybook-description">
            <span class="col-3">Normal</span>
            <span class="col-3">Hover</span>
            <span class="col-3">Expanded</span>
            <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator product-categories-filter accordion v2">
            <div class="col-3">
                <div class="collapsed card-header">
                    <span>List item</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                </div>
            </div>
            <div class="col-3">
                <div class="collapsed card-header hover">
                    <span>List item</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium gray-8"} />
                </div>
            </div>
            <div class="col-3">
                <div class="card-header">
                    <span>List item</span>
                    <SIcon xlinkHref={"/images/icons/16px/CloseUp16px.svg#closeup16px-a"} className={"medium black"} />
                </div>
            </div>
            <div class="col-3">
                <div class="collapsed card-header disabled">
                    <span>List item</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                </div>
            </div>
        </div>

        <h6>Expandable List - expandable item</h6>
        <p>Case when expandable list has item which is further expandable- expected as another accordion</p>
        <div class="row storybook-description">
            <span class="col-3">Normal</span>
            <span class="col-3">Hover</span>
            <span class="col-3">Expanded</span>
            <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator product-categories-filter accordion v2">
            <div class="row accordion v2 col-12">
                <div class="col-3">
                    <div class="collapsed card-header">
                        <span>List item</span>
                        <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                    </div>
                </div>
                <div class="col-3">
                    <div class="collapsed card-header hover">
                        <span>List item</span>
                        <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium gray-8"} />
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-header">
                        <span>List item</span>
                        <SIcon xlinkHref={"/images/icons/16px/CloseUp16px.svg#closeup16px-a"} className={"medium black"} />
                    </div>
                </div>
                <div class="col-3">
                    <div class="collapsed card-header disabled">
                        <span>List item</span>
                        <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export const ExpandableListBodyElement = (args) => (
    <section>
        <h6>Expandable list - item indent</h6>
        <div class="row storybook-description">
            <span class="col-3">Normal</span>
            <span class="col-3">Hover</span>
            <span class="col-3">Selected</span>
            <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator product-categories-filter accordion v2">
            <div class="col-3">
                <div class="list-group">
                    <a href="#link2" data-rb-event-key="#link2" class="list-group-item list-group-item-action">
                        Link item
                    </a>
                </div>
            </div>
            <div class="col-3">
                <div class="list-group">
                    <a href="#link2" data-rb-event-key="#link2" class="list-group-item list-group-item-action hover">
                        Link item
                    </a>
                </div>
            </div>
            <div class="col-3">
                <div class="list-group">
                    <a href="#link2" data-rb-event-key="#link2" class="list-group-item list-group-item-action active">
                        Link item
                    </a>
                </div>
            </div>
            <div class="col-3">
                <div class="list-group">
                    <a href="#link2" data-rb-event-key="#link2" class="list-group-item disabled list-group-item-action">
                        Link item
                    </a>
                </div>
            </div>
        </div>
        <div class="row storybook-separator product-categories-filter accordion v2">
            <div class="col-6">
                <div class="list-group">
                    <a href="#link2" data-rb-event-key="#link1" class="list-group-item list-group-item-action active">
                        Link item
                    </a>
                    <div class="list-group-item">Item</div>
                    <button class="list-group-item list-group-item-action">button item</button>
                </div>
            </div>
        </div>
        <h6>Expandable list - item selection</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
            <span class="col-2">Hover & Checked</span>
            <span class="col-2">Checked</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator product-categories-filter accordion v2">
            <div class="col-2">
                <div className="list-group">
                    <div class="list-group-item">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="572a6b3c-4747-44e0-bb3c-c64fbb7c0426" class="custom-control-input" />
                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0426" class="custom-control-label">
                                List item
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div className="list-group">
                    <div class="list-group-item hover">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="572a6b3c-4747-44e0-bb3c-c64fbb7c0427" class="custom-control-input" />
                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0427" class="custom-control-label">
                                List item
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div className="list-group">
                    <div class="list-group-item checked hover">
                        <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                id="572a6b3c-4747-44e0-bb3c-c64fbb7c0428"
                                class="custom-control-input"
                                checked="checked"
                            />
                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0428" class="custom-control-label">
                                List item
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div className="list-group">
                    <div class="list-group-item checked">
                        <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                id="572a6b3c-4747-44e0-bb3c-c64fbb7c0429"
                                class="custom-control-input"
                                checked="checked"
                            />
                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0429" class="custom-control-label">
                                List item
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div className="list-group">
                    <div class="list-group-item disabled">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="572a6b3c-4747-44e0-bb3c-c64fbb7c0429" class="custom-control-input" />
                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0429" class="custom-control-label">
                                List item
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const List = (args) => (
    <section>
        <div class="row storybook-separator">
            <div class="col-5">
                <div class="product-categories-filter accordion v2">
                    <div class="card">
                        <div class="collapsed card-header">
                            <span>Collapsed</span>
                            <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                        </div>
                        <div class="collapse">
                            <div class="list-group-wrap expandable not-expanded card-body">
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549cd" class="custom-control-input" />
                                            <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549cd" class="custom-control-label">
                                                Hospitality Display
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="572a6b3c-4747-44e0-bb3c-c64fbb7c0426" class="custom-control-input" />
                                            <label title="" htmlFor="572a6b3c-4747-44e0-bb3c-c64fbb7c0426" class="custom-control-label">
                                                Solid State Drives
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="e7343776-f5ce-46cf-8ba6-f4471aa4a03a" class="custom-control-input" />
                                            <label title="" htmlFor="e7343776-f5ce-46cf-8ba6-f4471aa4a03a" class="custom-control-label">
                                                Smartphones
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="4214b2ce-ae0c-4a00-95f8-13e0bf7e7139" class="custom-control-input" />
                                            <label title="" htmlFor="4214b2ce-ae0c-4a00-95f8-13e0bf7e7139" class="custom-control-label">
                                                TV
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="3db8f46b-207c-4859-8090-ce2a28d79635" class="custom-control-input" />
                                            <label title="" htmlFor="3db8f46b-207c-4859-8090-ce2a28d79635" class="custom-control-label">
                                                Einbaugeräte
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer icon-before">
                                <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium black"} />
                                <span>Mehr anzeigen</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-categories-filter accordion  v2">
                    <div class="card">
                        <div class="card-header">
                            <span>Expanded</span>
                            <SIcon xlinkHref={"/images/icons/16px/CloseUp16px.svg#closeup16px-a"} className={"medium black"} />
                        </div>
                        <div class="collapse show">
                            <div class="list-group-wrap expandable not-expanded card-body">
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="e7e3ee91-288e-4f0c-a463-e963361998ff" class="custom-control-input" />
                                            <label title="" htmlFor="e7e3ee91-288e-4f0c-a463-e963361998ff" class="custom-control-label">
                                                Advanced
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="1a20428d-26d7-47c8-889c-0f7fdbd53edd" class="custom-control-input" />
                                            <label title="" htmlFor="1a20428d-26d7-47c8-889c-0f7fdbd53edd" class="custom-control-label">
                                                Armbänder
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="3dd3cdd9-27b3-49d4-bf53-92d695abac6d" class="custom-control-input" />
                                            <label title="" htmlFor="3dd3cdd9-27b3-49d4-bf53-92d695abac6d" class="custom-control-label">
                                                Backöfen
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="d3f9dafc-b9c1-4db0-b528-49917734181b" class="custom-control-input" />
                                            <label title="" htmlFor="d3f9dafc-b9c1-4db0-b528-49917734181b" class="custom-control-label">
                                                Crystal UHD TV
                                            </label>
                                        </div>
                                    </div>
                                    <div class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="a8bdf8e1-be0b-4bb0-bc54-fd4cbd339f4e" class="custom-control-input" />
                                            <label title="" htmlFor="a8bdf8e1-be0b-4bb0-bc54-fd4cbd339f4e" class="custom-control-label">
                                                Dunstabzugshauben
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer icon-before">
                                <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium black"} />
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
