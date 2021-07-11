import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RepairOverview } from "./views/RepairOverview";
import { NavBar } from "./views/NavBar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { addRepair, updateRepairState } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.repair);

  useEffect(() => {
      dispatch(actionCreators.getRepairEntries())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      <div>
        <RepairOverview {...state}/>
      </div>
      <div>
        <button onClick={() => addRepair({name: "Car Handle", detail: "handle got chipped", fixed: false})}>Add</button>
        <button onClick={() => updateRepairState(1, true)}>Update</button>
      </div>
    </div>
  );
}

export default App;
