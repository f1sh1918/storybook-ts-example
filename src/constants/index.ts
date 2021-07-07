// Media Queries

export enum Breakpoint {
    sm = 568,
    md = 768,
    lg = 992,
    xl = 1200,
    xxl = 1440,
}

export enum BreakpointType {
    max = "max",
    min = "min",
}

export enum tableFilterType {
    INPUT = "input",
    DROPDOWN = "dropdown",
    DROPDOWN_GROUPED = "dropdown_grouped",
    DATE = "date",
}

export enum tableFilterFunctions {
    DATE = "filterDate",
    PRICE = "filterPrice",
}

export enum tableTemplateType {
    TEXT = "textBodyTemplate",
    DATE = "textDateTemplate",
    DOWNLOAD = "textDownloadTemplate",
    IMAGE = "imageBodyTemplate",
}

export enum formatTableDate {
    FILTER = "dd.mm.yy",
    TABLE_BODY = "DD.MM.YYYY",
}

export enum localesDate {
    DE = "de",
}

export enum localesNumberFormat {
    DE = "de-DE",
}

export enum currencies {
    DE = "EUR",
}

export enum numberFormatStyle {
    CURRENCY = "currency",
}
