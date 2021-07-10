
import { RepairActionTypes } from '../action-types/repairActionTypes';
import { Repair } from '../types';


interface AddRepairAction {
    type: RepairActionTypes.ADD_REPAIR_ENTRY;
    payload: Repair;
}

interface UpdateRepairAction {
    type: RepairActionTypes.UPDATE_REPAIR_STATE;
    guid: string;
    fixed: boolean;
}

interface GetRepairEntriesAction {
    type: RepairActionTypes.GET_REPAIR_ENTRIES;
    payload: Repair[];
}


export type RepairAction = AddRepairAction | UpdateRepairAction | GetRepairEntriesAction;
