import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClientOverview } from "./views/ClientOverview";
import { NavBar } from "./views/NavBar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { getRepairEntries } from "./state/action-creators/actionCreators";


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { addRepair, updateRepairState } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.repair);


  const {data} = state;
  useEffect(() => {
      dispatch(getRepairEntries())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      <div>
        <ClientOverview />
      </div>
      <div>
      <h1>Repairs {JSON.stringify(data)}</h1>
        <button onClick={() => addRepair({id: 1, guid: "abcde-fghij-klmno", name: "Car Handle", detail: "handle got chipped", fixed: false})}>Add</button>
        <button onClick={() => updateRepairState("abcde-fghij-klmno", true)}>Update</button>
      </div>
    </div>
  );
}

export default App;
