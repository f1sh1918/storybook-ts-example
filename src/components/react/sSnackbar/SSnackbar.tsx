import React from "react";
import { ToastContainer, toast } from "react-toastify";

/**
 * General Info: https://fkhadra.github.io/react-toastify/introduction
 */

interface ISSnackbar {
    /**
     * Provide the event message to be displayed
     */
    eventMessage: string;
    /**
     * Provide a boolean to signify if you would like a close button to be displayed
     */
    closeButton?: boolean;
    /**
     * Provide the text used for the close button
     */
    closeButtonText: string;
}

interface ICloseButton {
    closeButtonText: string;
    closeToast?: () => void;
}

const CloseButton: React.FunctionComponent<ICloseButton> = ({ closeButtonText, closeToast }) => (
    <div className="snack-btn">
        <button className="btn-v2 btn-underline-white" onClick={closeToast}>
            {closeButtonText}
        </button>
    </div>
);

const SSnackbar: React.FunctionComponent<ISSnackbar> = ({ eventMessage, closeButton, closeButtonText }) => {
    (() => {
        toast(eventMessage);
    })();

    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={7000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                limit={1}
                closeButton={closeButton && <CloseButton closeButtonText={closeButtonText} />}
            />
        </div>
    );
};

SSnackbar.defaultProps = {
    closeButton: true,
};

export default SSnackbar;
