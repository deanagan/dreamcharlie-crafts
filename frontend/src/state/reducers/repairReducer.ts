import { Action } from "../actions/repairActions";
import { RepairActionTypes } from "../action-types/repairActionTypes";
import { RepairState } from "../types";

const initialState: RepairState = {
    data: [],
    errors: undefined,
    loading: false
  }

const reducer = (state: RepairState = initialState, action: Action) => {
    switch (action.type) {
        case RepairActionTypes.ADD_REPAIR_ENTRY:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case RepairActionTypes.UPDATE_REPAIR_STATE:
            return {
                ...state,
                data: state.data.map(e => e.guid === action.guid ?
                    { ...e, fixed: action.fixed } : e
                )
            }
        //TODO: update summary, etc
        default:
            return state;
    }
}

export default reducer;