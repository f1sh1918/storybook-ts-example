import classNames from "classnames";
import React from "react";

import { iconUrlHelper, SIconSize } from "../../../utils";

/**
 * Pass additionally size classes for icons:
 * small: 12px icons
 * medium: 16px icons
 * large: 24 pixel icons
 *
 * ensure that the link contains link and #id of the svg
 */

interface ISIcon {
    /**
     * Provide additional classes
     */
    className?: string;
    /**
     * Provide Link to the SVG Icon
     */
    xlinkHref?: string;
    /**
     * Or provide icon name and icon size
     */
    iconName?: string;
    iconSize?: SIconSize;
}

const SIcon: React.FunctionComponent<ISIcon> = ({ className, xlinkHref, iconName, iconSize }) => {
    const IconSizeClasses = ["small", "medium", "large"];
    return !xlinkHref && iconName ? (
        <svg className={`svg-icon ${classNames(className, iconSize !== undefined ? IconSizeClasses[iconSize] : "")}`}>
            <use xlinkHref={iconUrlHelper(iconName, iconSize)}></use>
        </svg>
    ) : (
        <svg className={`svg-icon ${className}`}>
            <use xlinkHref={xlinkHref}></use>
        </svg>
    );
};

export default SIcon;
