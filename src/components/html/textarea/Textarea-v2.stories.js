export default {
    title: "HTML/Textarea",
};
export const Textarea = (args) => (
    <section>
        <h6>Textarea : using material-ui</h6>
        <div class="row storybook-description">
            <span class="col-3">Empty/Active</span>
            <span class="col-3">Disabled</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-3">
                <div class="textarea v2">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                            data-shrink="false"
                        >
                            Label
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                            <textarea
                                rows="4"
                                aria-invalid="false"
                                placeholder="Placeholder"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                            ></textarea>
                            <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                                readOnly=""
                                tabIndex="-1"
                            ></textarea>
                        </div>
                        <p class="MuiFormHelperText-root">Assistive text.</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="textarea v2">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-disabled Mui-disabled"
                            data-shrink="false"
                        >
                            Disabled
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline Mui-disabled Mui-disabled MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                            <textarea
                                rows="4"
                                aria-invalid="false"
                                disabled=""
                                class="MuiInputBase-input MuiInput-input Mui-disabled Mui-disabled MuiInputBase-inputMultiline MuiInput-inputMultiline"
                            ></textarea>
                            <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInput-input Mui-disabled Mui-disabled MuiInputBase-inputMultiline MuiInput-inputMultiline"
                                readOnly=""
                                tabIndex="-1"
                            ></textarea>
                        </div>
                        <p class="MuiFormHelperText-root Mui-disabled">Assistive text.</p>
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
                <div class="textarea v2">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled Mui-focused"
                            data-shrink="true"
                        >
                            Label
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline Mui-focused">
                            <textarea
                                rows="4"
                                aria-invalid="false"
                                placeholder="Placeholder"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                            >
                                Hello World
                            </textarea>
                            <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                                readOnly=""
                                tabIndex="-1"
                            ></textarea>
                        </div>
                        <p class="MuiFormHelperText-root MuiFormHelperText-filled">Assistive text.</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="textarea v2">
                    <div class="MuiFormControl-root MuiTextField-root">
                        <label
                            class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-error Mui-error MuiFormLabel-filled"
                            data-shrink="true"
                        >
                            Label
                        </label>
                        <div class="MuiInputBase-root MuiInput-root MuiInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                            <textarea
                                rows="4"
                                aria-invalid="true"
                                placeholder="Placeholder"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                            >
                                Hello World
                            </textarea>
                            <textarea
                                aria-hidden="true"
                                class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                                readOnly=""
                                tabIndex="-1"
                            ></textarea>
                        </div>
                        <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-filled">Assistive text.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
