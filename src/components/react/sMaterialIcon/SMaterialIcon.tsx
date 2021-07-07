import React, {memo} from "react";
import SIcon from "../sIcon/SIcon";

export interface ISMaterialIcon {
    iconUrl: string;
    className?: string;
}

const SMaterialIcon: React.FunctionComponent<ISMaterialIcon> = (props) => {
    return <SIcon xlinkHref={props.iconUrl} className={`medium mt1 ${props.className}`} />;
};

export default memo(SMaterialIcon);
