export enum SIconSize {
    Small = 0,
    Medium = 1,
    Large = 2,
}
const IconSizesInPx = ["12px", "16px", "24px"];

/**
 * Generates Icon Url based on icon name and optional size
 * @param name Name of the Icon
 * @param size One of 3 supported sizes 12px = small, 16 = medium, 24 = large (default is medium)
 */
export const iconUrlHelper = (name: string, size: SIconSize = SIconSize.Medium) => {
    const IconsFolderUrl = "/images/icons";
    const iconSize: string = IconSizesInPx[size];
    return `${IconsFolderUrl}/${iconSize}/${name}${iconSize}.svg#${name.toLowerCase()}${iconSize}-a`;
};
