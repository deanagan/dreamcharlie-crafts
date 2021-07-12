import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RepairOverview } from "./views/RepairOverview";
import { NavBar } from "./views/NavBar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "./store";
import { AddRepairModal } from "./views/AddRepairModal";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.repair);

  useEffect(() => {
    dispatch(actionCreators.getRepairEntries());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <div>
        <RepairOverview {...state} />
      </div>
      {/* <button onClick={() => addRepair({name: "Car Handle", detail: "handle got chipped", fixed: false})}>Add</button> */}
      {/* <Col sm={3}><Button variant="primary" onClick={() => updateRepairState(1, true)}>Update</Button></Col> */}
      <div className="float-md-right mr-4" >
        <AddRepairModal />
      </div>
    </div>
  );
};

export default App;
