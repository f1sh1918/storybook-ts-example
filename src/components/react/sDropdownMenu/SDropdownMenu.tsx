import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";

import { SMaterialIcon } from "../..";
import { PaperProps } from "@material-ui/core/Paper";

interface ISDropdownMenu {
    items: IListItemIcon[];
    anchorEl: null | HTMLElement;
    setAnchorEl: (value: React.SetStateAction<HTMLElement> | null) => void;
    selectedIndex: number | null;
    setSelectedIndex: (value: number) => void;
    iconUrl?: string;
    paperStyleProps?: PaperProps;
    menuId: string;
}

export interface IListItemIcon {
    label: string;
    listIconUrl?: string;
}

const SDropdownMenu: React.FunctionComponent<ISDropdownMenu> = ({
    items,
    anchorEl,
    setAnchorEl,
    iconUrl,
    selectedIndex,
    setSelectedIndex,
    paperStyleProps,
    menuId,
}) => {
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="s-dropdown-menu">
            <IconButton aria-label="more" aria-controls={menuId} aria-haspopup="true" onClick={handleClick}>
                <SMaterialIcon iconUrl={iconUrl ?? "/images/icons/16px/Drawer16px.svg#drawer16px-a"} />
            </IconButton>
            <Menu id={menuId} anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} PaperProps={paperStyleProps}>
                {items.map((item, index) => {
                    if (item.listIconUrl) {
                        return (
                            <MenuItem key={item.label + "_" + index.toString()} onClick={(event) => handleMenuItemClick(event, index)}>
                                <ListItemIcon>
                                    <SMaterialIcon iconUrl={item.listIconUrl} />
                                </ListItemIcon>
                                <Typography variant="inherit" noWrap>
                                    <span className="font-body2 family-one">{item.label}</span>
                                </Typography>
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem key={item + "_" + index.toString()} onClick={(event) => handleMenuItemClick(event, index)}>
                            <Typography variant="inherit" noWrap>
                                <span className="font-body2 family-one">{item}</span>
                            </Typography>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export default SDropdownMenu;
