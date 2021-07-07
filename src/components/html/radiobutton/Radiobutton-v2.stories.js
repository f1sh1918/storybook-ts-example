// Does not exist like explicit component, look for: <div className="d-inline-flex mr-4 form-group custom-control custom-radio">

export default {
    title: "HTML/Radiobutton v2",
};

export const radiobutton = (args) => (
    <section>
        <h6>Radiobutton</h6>
        <div class="row storybook-description">
            <span class="col-2">Unselected</span> <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div class="custom-control custom-radio v2">
                    <input type="radio" id="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="custom-control-input" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549cb" class="custom-control-label">
                        Sample text
                    </label>
                </div>
            </div>
            <div class="col-2">
                <div class="custom-control custom-radio v2">
                    <input type="radio" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="custom-control-input" disabled="true" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ct" class="custom-control-label">
                        Sample text
                    </label>
                </div>
            </div>
        </div>
        <h6>Radiobutton -checked (checked='checked' hardcoded)</h6>
        <div class="row storybook-description">
            <span class="col-2">Selected</span> <span class="col-2">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div class="custom-control custom-radio v2">
                    <input type="radio" id="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="custom-control-input" checked="checked" />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ca" class="custom-control-label">
                        Sample text
                    </label>
                </div>
            </div>
            <div class="col-2">
                <div class="custom-control custom-radio v2">
                    <input
                        type="radio"
                        id="8fb4dcbc-b31b-464f-9b5f-45e176c549ck"
                        class="custom-control-input"
                        disabled="true"
                        checked="checked"
                    />
                    <label title="" htmlFor="8fb4dcbc-b31b-464f-9b5f-45e176c549ck" class="custom-control-label">
                        Sample text
                    </label>
                </div>
            </div>
        </div>
    </section>
);
