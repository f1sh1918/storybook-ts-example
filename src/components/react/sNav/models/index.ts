export interface NavigationItemModel {
    CategoryImage: ImageModel;
    Link: LinkModel;
    Text?: string | null;
    Name: string | null;
    CategoryText?: string | null;
    Children: NavigationItemModel[] | null;
    ProductChildren: ProductChildren | null;
}

export interface ImageModel {
    Url: string | null;
    CropUrl: string | null;
    AltText: string | null;
}

export interface LinkModel {
    Url: string | null;
    Name: string | null;
    Target: string | null;
}

export interface FavoredProductCategories {
    Nodes: any[];
}

export interface Node3 {
    UniqueId: string | null;
    Key: string | null;
    Name: string | null;
    SortOrder: number;
}

export interface ProductCategories {
    Nodes: Node3[];
}

export interface BusinessUnit {
    Name: string;
    UniqueId: string;
    Key: string;
    ProductCategories: ProductCategories;
}

export interface Node2 {
    BusinessUnit: BusinessUnit;
}

export interface BusinessUnitClearances {
    Nodes: Node2[];
}

export interface Company {
    BusinessUnitClearances: BusinessUnitClearances;
}

export interface Node {
    FavoredProductCategories: FavoredProductCategories;
    Company: Company;
}

export interface ContactPersons {
    Nodes: Node[];
}

export interface Data {
    ContactPersons: ContactPersons;
}

export interface ProductChildren {
    Data: Data;
    Error?: any;
}
