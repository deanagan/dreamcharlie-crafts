import * as React from "react"

type Props = {
  saveEntry: (entry: IEntry | any) => void
}

export const AddEntry: React.FC<Props> = ({ saveEntry }) => {
  const [entry, setEntry] = React.useState<IEntry | {}>()

  const handleEntryData = (e: React.FormEvent<HTMLInputElement>) => {
    setEntry({
      ...entry,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewEntry = (e: React.FormEvent) => {
    e.preventDefault()
    saveEntry(entry)
  }

  return (
    <form onSubmit={addNewEntry} className="Add-entry">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleEntryData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleEntryData}
      />
      <button disabled={entry === undefined ? true : false}>
        Add entry
      </button>
    </form>
  )
}