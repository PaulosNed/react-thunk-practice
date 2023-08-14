import React, { useEffect } from "react";
import { Note } from "../models/Note";
import { NoteCard } from "../components/NoteCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../store/thunks/fetchNotes";

export const AllNotes = () => {

  const dispatch = useDispatch()
  const {status, data, error} = useSelector((state: any) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes() as any)
  }, [dispatch])


  return (
    <div className="w-3/4 mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error.message}</p>}
        {data &&
          data.map((note: Note) => (
            <NoteCard
              key={note.id}
              userId={note.userId}
              id={note.id}
              title={note.title}
              body={note.body}
            />
          ))}
      </div>
    </div>
  );
};
