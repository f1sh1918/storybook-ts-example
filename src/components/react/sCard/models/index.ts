import React from "react";

export interface ISCard {
    className?: string;
    bodyClass?: string;
    headerClass?: string;
    cardHeader?: React.ReactNode;
    cardBody: React.ReactNode;
    divider?: boolean;
    rounded?: boolean;
}
