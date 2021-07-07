// Toggle switch is in base - checkbox, with additional label element, and different classes.
export default {
    title: "HTML/Toggle-switch v2",
};

export const ToggleButton = (args) => (
    <section>
        <h6>Toggle/switch</h6>
        <div class="row storybook-description">
            <span class="col-3">Unselected</span> <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <div class="custom-control custom-toggle v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="checkbox" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="toggle"></label>
                    <label title="" class="custom-control-label">
                        Toggle label
                    </label>
                </div>
            </div>
            <div class="col-3">
                <div class="custom-control custom-toggle v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="checkbox" disabled="true" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="toggle"></label>
                    <label title="" class="custom-control-label">
                        Toggle label
                    </label>
                </div>
            </div>
        </div>
        <h6>Toggle switch -selected (checked='checked' hardcoded)</h6>
        <div class="row storybook-description">
            <span class="col-3">Selected</span> <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <div class="custom-control custom-toggle v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="checkbox" checked="checked" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="toggle"></label>
                    <label title="" class="custom-control-label">
                        Toggle label
                    </label>
                </div>
            </div>
            <div class="col-3">
                <div class="custom-control custom-toggle v2">
                    <input type="checkbox" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ck" class="checkbox" disabled="true" checked="checked" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ck" class="toggle"></label>
                    <label title="" class="custom-control-label">
                        Toggle label
                    </label>
                </div>
            </div>
        </div>
    </section>
);
