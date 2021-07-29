import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RepairOverview } from "./views/RepairOverview";
import { NavBar } from "./views/NavBar";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "./store";
import { AddRepairModal } from "./views/AddRepairModal";
import { DeleteConfirmationModal } from "./components/DeleteConfirmationModal";
import { DeleteLink } from "./components/DeleteLink";
import {ThemeProvider} from 'styled-components';
import { theme } from './theme';
import {DefaultLayout} from './pages/_defaultLayout';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <DefaultLayout />
            </ThemeProvider>
        </BrowserRouter>
    );
};
//
// const App: React.FC = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state: State) => state.repair);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//
//   useEffect(() => {
//     dispatch(actionCreators.getRepairEntries());
//   }, [dispatch]);
//
//   return (
//     <div className="App">
//       <NavBar />
//       <div>
//         <RepairOverview {...state} />
//       </div>
//       {/* <button onClick={() => addRepair({name: "Car Handle", detail: "handle got chipped", fixed: false})}>Add</button> */}
//       {/* <Col sm={3}><Button variant="primary" onClick={() => updateRepairState(1, true)}>Update</Button></Col> */}
//       <div className="float-md-right mr-4">
//         <AddRepairModal />
//       </div>
//       <div>
//         <div>
//           <DeleteConfirmationModal
//             title="Confirm Delete"
//             onCancel={() => window.alert("Cancelled!")}
//             onDelete={() => window.alert("Deleted!")}
//             show={showDeleteModal}
//           >
//             Are you sure?
//           </DeleteConfirmationModal>
//           <DeleteLink deleteFn={() => setShowDeleteModal(!showDeleteModal)} />
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
