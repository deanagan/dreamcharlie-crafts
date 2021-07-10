import { RepairActionTypes } from "../action-types/repairActionTypes";
import { RepairAction } from "../actions/repairActions";
import { RepairState } from "../types";

const initialState: RepairState = {
    data: [],
    errors: undefined,
    loading: false
  }

const reducer = (state: RepairState = initialState, action: RepairAction) => {
    switch (action.type) {
        case RepairActionTypes.ADD_REPAIR_ENTRY:
            return {
                ...state,
                data: [...state.data, action.repair]
            }
        case RepairActionTypes.UPDATE_REPAIR_STATE:
            return {
                ...state,
                data: state.data.map(e => e.guid === action.guid ?
                    { ...e, fixed: action.fixed } : e
                )
            }
        case RepairActionTypes.GET_REPAIR_ENTRIES:
            return {
                ...state,
                data: action.repairs
            }
        //TODO: update summary, etc
        default:
            return state;
    }
}

export default reducer;