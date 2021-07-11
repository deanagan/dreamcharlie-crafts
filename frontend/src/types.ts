
export interface Repair {
    id?: number;
    name: string;
    detail: string;
    fixed: boolean;
}

export interface RepairState {
    readonly loading: boolean;
    readonly repairs: Repair[];
    readonly errors?: string;
}