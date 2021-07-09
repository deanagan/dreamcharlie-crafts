import { RepairActionTypes } from "../action-types/repairActionTypes"
import { Dispatch } from "redux";
import { Repair } from "../types";
import { Action } from "../actions/repairActions";

export const addRepair = (repair: Repair) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: RepairActionTypes.ADD_REPAIR_ENTRY,
            payload: repair
        })
    }
}

export const updateRepairState = (guid: string, fixed: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: RepairActionTypes.UPDATE_REPAIR_STATE,
            guid: guid,
            fixed: fixed
        })
    }
}
