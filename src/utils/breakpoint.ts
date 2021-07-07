import { Breakpoint, BreakpointType } from "../constants";

export const includeMediaBreakpoint = (type: BreakpointType, breakpointValue: Breakpoint): string => {
    const breakPointValueChecked = type === BreakpointType.max ? breakpointValue - 0.01 : breakpointValue;
    return `(${type}-width:${breakPointValueChecked}px)`;
};
