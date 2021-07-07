import { SIcon } from "../../index";

export default {
    title: "HTML/Buttons v2",
};

// Different types of buttons are defined by classes (color,border and background):
// btn-label, btn-underline-black, btn-underline-white, btn-transparent, btn-black, btn-blue
// Position of icon regarding the button text : icon-before, icon-after
// Button can have text without span element as wrapper, but not recommended with icon

export const UnderlineButtonDark = (args) => (
    <section>
        <h6>Underline button</h6>
        <div class="row storybook-description btn-underline">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-underline-black">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-underline-black hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-underline-black disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const UnderlineButtonLight = (args) => (
    <section>
        <h6>Underline button</h6>
        <div class="row storybook-description btn-underline">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator background-dark">
            <div class="col-2">
                <button class="btn-v2 btn-underline-white">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-underline-white hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-underline-white disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const UnderlineButtonAnimated = (args) => (
    <section>
        <h6>Underline button animated</h6>
        <div class="row storybook-description btn-underline">
            <span class="col-2">Normal</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-animated">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>

        </div>
    </section>
);

export const UnderlineButtonAnimatedSmall = (args) => (
    <section>
        <h6>Underline button animated</h6>
        <div class="row storybook-description btn-underline">
            <span class="col-2">Normal</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-underline-animated">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>

        </div>
    </section>
);

export const LabelButton = (args) => (
    <section>
        <h6>Label button</h6>
        <div class="row storybook-description btn-label">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-label icon-after">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium black"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-label icon-after hover">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium gray-8"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-label icon-after disabled">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"} className={"medium black"} />
                </button>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-label icon-before">
                    <SIcon xlinkHref={"/images/icons/16px/FilterFilled16px.svg#filterfilled16px-a"} className={"medium black"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-label icon-before hover">
                    <SIcon xlinkHref={"/images/icons/16px/FilterFilled16px.svg#filterfilled16px-a"} className={"medium gray-8"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-label icon-before disabled">
                    <SIcon xlinkHref={"/images/icons/16px/FilterFilled16px.svg#filterfilled16px-a"} className={"medium black"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const ButtonTransparent = (args) => (
    <section>
        <h6>Outlined button</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-transparent">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-after">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-after hover">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium gray-8"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-after disabled">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium black"} />
                </button>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-before">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium black"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-before hover">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium gray-8"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-transparent icon-before disabled">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium black"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const ButtonFilled = (args) => (
    <section>
        <h6>Filled button</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-black">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-black icon-after">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium white"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black icon-after hover">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium white"} />
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black icon-after disabled">
                    <span class="btn__text">Sample label</span>
                    <SIcon xlinkHref={"/images/icons/16px/OpenDown16px.svg#opendown16px-a"} className={"medium white"} />
                </button>
            </div>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-black icon-before">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium white"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black icon-before hover">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium white"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-black icon-before disabled">
                    <SIcon xlinkHref={"/images/icons/16px/Plus16px.svg#plus16px-a"} className={"medium white"} />
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const ButtonBlue = (args) => (
    <section>
        <h6>Purchase button</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span> <span class="col-2">Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="btn-v2 btn-blue">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-blue hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="btn-v2 btn-blue disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const ButtonIcon = (args) => (
  <section>
    <h6>Icon button</h6>
      <div class="row storybook-description">
        <span class="col-2">Normal</span> <span class="col-2">Hover</span>
        <span class="col-2">Disabled</span>
      </div>
      <div class="row storybook-separator">
        <div class="col-2">
          <button class="btn-v2 btn-icon large">
            <SIcon
              xlinkHref={"/images/icons/24px/NextForward24px.svg#nextforward24px-a"                        }
              className={"large black"}
            />
          </button>
        </div>
        <div class="col-2">
          <button className="btn-v2 btn-icon large hover">
            <SIcon
              xlinkHref={"/images/icons/24px/NextForward24px.svg#nextforward24px-a"}
                className={"large black"}
            />
          </button>
        </div>
        <div class="col-2">
          <button className="btn-v2 btn-icon large disabled">
            <SIcon
              xlinkHref={"/images/icons/24px/NextForward24px.svg#nextforward24px-a"}
              className={"large black"}
            />
          </button>
        </div>
      </div>
      <div className="row storybook-separator">
        <div className="col-2">
          <button className="btn-v2 btn-icon medium">
            <SIcon
              xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"}
              className={"medium black"}
            />
          </button>
        </div>
        <div className="col-2">
          <button className="btn-v2 btn-icon medium hover">
            <SIcon
              xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"}
              className={"medium black"}
            />
          </button>
        </div>
        <div className="col-2">
          <button className="btn-v2 btn-icon medium disabled">
            <SIcon
              xlinkHref={"/images/icons/16px/NextForward16px.svg#nextforward16px-a"}
              className={"medium black"}
            />
          </button>
        </div>
      </div>
      <div className="row storybook-separator">
        <div className="col-2">
          <button className="btn-v2 btn-icon small">
            <SIcon
              xlinkHref={"/images/icons/12px/NextForward12px.svg#nextforward12px-a"}
              className={"small black"}
            />
          </button>
        </div>
        <div className="col-2">
          <button className="btn-v2 btn-icon small hover">
            <SIcon
              xlinkHref={"/images/icons/12px/NextForward12px.svg#nextforward12px-a"}
              className={"small black"}
            />
          </button>
        </div>
        <div className="col-2">
          <button className="btn-v2 btn-icon small disabled">
            <SIcon
              xlinkHref={"/images/icons/12px/NextForward12px.svg#nextforward12px-a"}
              className={"small black"}
            />
          </button>
        </div>
      </div>
  </section>
);

