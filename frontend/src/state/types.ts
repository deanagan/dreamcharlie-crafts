
export interface Repair {
    id: number;
    guid: string;
    name: string;
    detail: string;
    fixed: boolean;
}

export interface RepairState {
    readonly loading: boolean;
    readonly data: Repair[];
    readonly errors?: string;
}