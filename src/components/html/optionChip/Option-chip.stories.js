export default {
    title: "HTML/Option chip(WIP)",
};
export const ColorChipWIP = (args) => (
    <section>
        <h6>Color chip</h6>
        <p>Variation of radiobutton</p>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover</span>
            <span class="col-2">Selected</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div className="option-chip-color custom-control custom-radio v2">
                    <input type="radio" id="1" className="custom-control-input" />
                    <label title="" htmlFor="1" className="custom-control-label"></label>
                </div>
            </div>
            <div class="col-2">
                <div className="option-chip-color custom-control custom-radio hover v2">
                    <input type="radio" id="2" className="custom-control-input" />
                    <label title="" htmlFor="2" className="custom-control-label"></label>
                </div>
            </div>
            <div class="col-2">
                <div className="option-chip-color custom-control custom-radio v2">
                    <input type="radio" id="3" className="custom-control-input" checked="checked" />
                    <label title="" htmlFor="3" className="custom-control-label"></label>
                </div>
            </div>
            <div class="col-2">
                <div className="option-chip-color custom-control custom-radio v2">
                    <input type="radio" id="4" className="custom-control-input" disabled="true" />
                    <label title="" htmlFor="4" className="custom-control-label"></label>
                </div>
            </div>
        </div>
    </section>
);

export const LabelChip = (args) => (
    <section>
        <h6>Label chip</h6>
        <p>Variation of radiobutton</p>
        <div class="row storybook-description">
            <span class="col-2">Normal</span>
            <span class="col-2">Hover & selected</span>
            <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div className="col-2">
                <div className="option-chip-label custom-control custom-radio v2">
                    <input type="radio" id="1" className="custom-control-input" />
                    <label title="" htmlFor="1" className="custom-control-label">
                        Label
                    </label>
                </div>
            </div>
            <div className="col-2">
                <div className="option-chip-label custom-control custom-radio hover v2">
                    <input type="radio" id="2" className="custom-control-input" />
                    <label title="" htmlFor="2" className="custom-control-label">
                        Label
                    </label>
                </div>
            </div>
            <div className="col-2">
                <div className="option-chip-label custom-control custom-radio v2">
                    <input type="radio" id="3" className="custom-control-input" disabled="true" />
                    <label title="" htmlFor="3" className="custom-control-label">
                        Label
                    </label>
                </div>
            </div>
        </div>
    </section>
);
