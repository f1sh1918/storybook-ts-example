export default {
    title: "HTML/Selection chip",
};
export const SelectionChipDesktop = (args) => (
    <section>
        <h6>Selection Chip Desktop</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
            <span class="col-2">Selected</span>
            <span class="col-2">Selected Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="selection-chip-v2">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 selected">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 selected hover">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 disabled">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);

export const SelectionChipMobile = (args) => (
    <section>
        <h6>Selection Chip Mobile</h6>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
            <span class="col-2">Selected</span>
            <span class="col-2">Selected Hover</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <button class="selection-chip-v2 mobile">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 hover mobile">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 selected mobile">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 selected hover mobile">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
            <div class="col-2">
                <button class="selection-chip-v2 disabled mobile">
                    <span class="btn__text">Sample label</span>
                </button>
            </div>
        </div>
    </section>
);
