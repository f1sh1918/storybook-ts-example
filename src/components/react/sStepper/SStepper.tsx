import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";

import {Breakpoint, BreakpointType} from "../../../constants";
import {includeMediaBreakpoint} from "../../../utils";

/**
 * Stepper Horizontal uses 100% width in mobile mode.
 * In Desktop Mode it uses 50% for 2 or less Steps and 75% for 3 or more steps
 * Example usage: use React State for active Step
 * <StepperHorizontal activeStep={1} stepNames={["Distributoren", "Prüfung", "Nächste Schritte"]}/>
 */

interface ISStepper {
    /**
     * current active Step, use state for it
     */
    activeStep: number;
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * Pass the step names as a string array
     */
    stepNames: string[];
}

const SStepper: React.FunctionComponent<ISStepper> = (props) => {
    const { activeStep, stepNames = [], className } = props;
    const desktop = useMediaQuery(includeMediaBreakpoint(BreakpointType.min, Breakpoint.md));
    const desktopWidth = !desktop ? "100%" : stepNames.length > 2 ? "75%" : "50%";
    const containerWidth = { width: desktopWidth };

    return (
        <div className={classNames("d-block w-100 bg-white", className)}>
            <div className={"SStepper-wrapper bg-white d-block mx-auto"} style={containerWidth}>
                <Stepper alternativeLabel nonLinear activeStep={activeStep} className="SStepper">
                    {stepNames.map((name, index) => {
                        return (
                            <Step
                                key={name}
                                className={classNames({
                                    "step-completed": index < props.activeStep,
                                })}
                            >
                                <StepLabel>{name}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        </div>
    );
};

export default SStepper;
