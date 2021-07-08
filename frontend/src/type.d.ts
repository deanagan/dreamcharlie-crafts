
interface IEntry {
    id: number;
    title: string;
    body: string;
}

type EntryState = {
    entries: IEntry[];
}

  type EntryAction = {
    type: string;
    entry: IEntry;
  }

  type DispatchType = (args: EntryAction) => EntryAction;