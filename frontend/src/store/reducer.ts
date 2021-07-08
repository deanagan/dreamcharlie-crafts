import * as actionTypes from "./actionTypes"

const initialState: EntryState = {
  entries: [],
}

const reducer = (
    state: EntryState = initialState,
    action: EntryAction
  ): EntryState => {
    switch (action.type) {
      case actionTypes.ADD_ENTRY:
        const newEntry: IEntry = {
          id: Math.random(), // not really unique
          title: action.entry.title,
          body: action.entry.body,
        }
        return {
          ...state,
          entries: state.entries.concat(newEntry),
        }
      case actionTypes.REMOVE_ENTRY:
        const updatedEntries: IEntry[] = state.entries.filter(
          entry => entry.id !== action.entry.id
        )
        return {
          ...state,
          entries: updatedEntries,
        }
    }
    return state
  }

  export default reducer