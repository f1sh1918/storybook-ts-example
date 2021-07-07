import React from "react";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";

interface ISTextArea {
    className?: string;
    error?: boolean;
    required?: boolean;
    placeholder?: string;
    multiline?: boolean;
    /**
     * defines amount of rows displayed by default.
     * If you use rowsMax and want to have a single line with auto resize, pass "rows ?: null"
     */
    rows?: number;
    /**
     * define max amount of rows that textfield can grow
     */
    rowsMax?: number;
    label?: string;
    helperText?: string;
    value?: string;
    defaultValue?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * Id of the Textfield
     */
    id?: string;
    disabled?: boolean;
}
const STextArea: React.FunctionComponent<ISTextArea> = ({
    className,
    error,
    rows,
    rowsMax,
    multiline,
    placeholder,
    label,
    helperText,
    required,
    value,
    defaultValue,
    onChange,
    id,
    disabled,
}) => {
    return (
        <div className={classNames("textarea v2", className)}>
            <TextField
                id={id}
                onChange={onChange}
                required={required}
                error={error}
                placeholder={placeholder}
                multiline={multiline}
                rows={rows}
                rowsMax={rowsMax}
                label={label}
                helperText={helperText}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
            />
        </div>
    );
};

STextArea.defaultProps = {
    multiline: true,
    rows: 4,
    rowsMax: 4,
};

export default STextArea;
