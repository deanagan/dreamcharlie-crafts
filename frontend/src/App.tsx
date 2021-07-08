import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClientOverview } from "./views/ClientOverview";
import { NavBar } from "./views/NavBar";
import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addEntry } from "./store/actionCreators";
import { AddEntry } from "./components/AddEntry";
import { Entry } from "./components/Entry";

const App: React.FC = () => {
  const entries: readonly IEntry[] = useSelector(
    (state: EntryState) => state.entries,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveEntry = React.useCallback(
    (entry: IEntry) => dispatch(addEntry(entry)),
    [dispatch]
  )

  return (
    <div className="App">
      <NavBar />
      <div>
        <ClientOverview />
      </div>
      <div>
      <h1>My Entries</h1>
      <AddEntry saveEntry={saveEntry} />
      {entries.map((entry: IEntry) => (
        <Entry
          key={entry.id}
          entry={entry}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
