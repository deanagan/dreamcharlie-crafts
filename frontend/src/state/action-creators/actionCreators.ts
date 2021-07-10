import { RepairActionTypes } from "../action-types/repairActionTypes";
import { Dispatch } from "redux";
import { Repair } from "../types";
import { RepairAction } from "../actions/repairActions";

import axios from "axios";

export const addRepair = (repair: Repair) => {
  return (dispatch: Dispatch<RepairAction>) => {
    dispatch({
      type: RepairActionTypes.ADD_REPAIR_ENTRY,
      payload: repair,
    });
  };
};

export const updateRepairState = (guid: string, fixed: boolean) => {
  return (dispatch: Dispatch<RepairAction>) => {
    dispatch({
      type: RepairActionTypes.UPDATE_REPAIR_STATE,
      guid: guid,
      fixed: fixed,
    });
  };
};

export const getRepairEntries = () => {
  return (dispatch: Dispatch<RepairAction>) => {
    axios.get(`http://localhost:1337/repairs`).then((res) => {
      dispatch({
        type: RepairActionTypes.GET_REPAIR_ENTRIES,
        payload: res.data,
      });
    });
  };
};
