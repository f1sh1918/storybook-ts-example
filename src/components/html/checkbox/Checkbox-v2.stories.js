// Does not exist like explicit component, look for: <div className="custom-control custom-checkbox">
export default {
    title: "HTML/Checkbox v2",
};

export const checkbox = (args) => (
    <section>
        <h6>Checkbox</h6>
        <div class="row storybook-description">
            <span class="col-2">Unselected</span> <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div class="custom-control custom-checkbox v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="custom-control-input" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="custom-control-label">
                        Checkbox label
                    </label>
                </div>
            </div>
            <div class="col-2">
                <div class="custom-control custom-checkbox v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="custom-control-input" disabled="true" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="custom-control-label">
                        Checkbox label
                    </label>
                </div>
            </div>
        </div>
        <h6>Checkbox -selected (checked='checked' hardcoded)</h6>
        <div class="row storybook-description">
            <span class="col-2">Selected</span> <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div class="custom-control custom-checkbox v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="custom-control-input" checked="checked" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="custom-control-label">
                        Checkbox label
                    </label>
                </div>
            </div>
            <div class="col-2">
                <div class="custom-control custom-checkbox v2">
                    <input
                        type="checkbox"
                        id="8fb4dcbc-b31b-464f-9b5f-45e176c549ck"
                        class="custom-control-input"
                        disabled="true"
                        checked="checked"
                    />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ck" class="custom-control-label">
                        Checkbox label
                    </label>
                </div>
            </div>
        </div>
    </section>
);
