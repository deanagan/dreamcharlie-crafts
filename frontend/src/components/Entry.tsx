import * as React from "react"
// import { Dispatch } from "redux"
// import { useDispatch } from "react-redux"

type Props = {
  entry: IEntry
  removeEntry: (entry: IEntry) => void
}

export const Entry: React.FC<Props> = ({ entry }) => {
//  const dispatch: Dispatch<any> = useDispatch()

//   const deleteEntry = React.useCallback(
//     (entry: IEntry) => dispatch(removeEntry(entry)),
//     [dispatch, removeEntry]
//   )

  return (
    <div className="Entry">
      <div>
        <h1>{entry.title}</h1>
        <p>{entry.body}</p>
      </div>
      {/* <button onClick={() => deleteEntry(entry)}>Delete</button> */}
    </div>
  )
}