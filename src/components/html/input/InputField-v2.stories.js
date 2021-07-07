// for more information check https://material-ui.com/components/text-fields/
// styles which ar coming from material-ui are in './mui-styles.scss'

export default {
    title: "HTML/Input field",
};

export const InputTextField = (args) => (
    <section>
        <h6>Input text field : using material-ui</h6>
        <div class="row storybook-description">
            <span class="col-3">Empty</span>
            <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <div class="input-field v2 ">
                    <div class="MuiFormControl-root MuiTextField-root ">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                            data-shrink="false"
                            htmlFor="standard-basic"
                            id="standard-basic-label"
                        >
                            Standard
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                            <input
                                aria-invalid="false"
                                aria-describedby="standard-basic-helper-text"
                                id="standard-basic"
                                type="text"
                                class="MuiInputBase-input MuiInput-input"
                                value=""
                            />
                        </div>
                        <p class="MuiFormHelperText-root" id="standard-basic-helper-text">
                            Some important text
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="input-field v2 ">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-disabled Mui-disabled"
                            data-shrink="false"
                            htmlFor="standard-basic"
                            id="standard-basic-label"
                        >
                            Disabled
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline Mui-disabled Mui-disabled MuiInputBase-formControl MuiInput-formControl">
                            <input
                                aria-invalid="false"
                                aria-describedby="standard-basic-helper-text"
                                disabled=""
                                id="standard-basic"
                                type="text"
                                class="MuiInputBase-input MuiInput-input Mui-disabled Mui-disabled"
                                value=""
                            />
                        </div>
                        <p class="MuiFormHelperText-root Mui-disabled" id="standard-basic-helper-text">
                            Someimportant text
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="row storybook-description">
            <span class="col-3">Filled/Active</span>
            <span class="col-3">Error</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <div class="input-field v2 ">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled Mui-required Mui-required Mui-focused"
                            data-shrink="true"
                            htmlFor="standard-required"
                            id="standard-required-label"
                        >
                            Required
                            <span aria-hidden="true" class="MuiFormLabel-asterisk MuiInputLabel-asterisk">
                                *
                            </span>
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl Mui-focused">
                            <input
                                aria-invalid="false"
                                id="standard-required"
                                required=""
                                type="text"
                                class="MuiInputBase-input MuiInput-input Mui-focused"
                                value="Hello World"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="input-field v2 ">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-error Mui-error MuiFormLabel-filled"
                            data-shrink="true"
                            htmlFor="standard-error-helper-text"
                            id="standard-error-helper-text-label"
                        >
                            Error
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInput-formControl">
                            <input
                                aria-invalid="true"
                                aria-describedby="standard-error-helper-text-helper-text"
                                id="standard-error-helper-text"
                                type="text"
                                class="MuiInputBase-input MuiInput-input"
                                value="Hello World"
                            />
                        </div>
                        <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-filled" id="standard-error-helper-text-helper-text">
                            Incorrect entry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
