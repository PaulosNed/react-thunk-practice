import React, { useEffect } from "react";
import { Note } from "../models/Note";
import { NoteCard } from "../components/NoteCard";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../store/thunks/fetchNotes";
import { useFetchNotesQuery } from "../store/apis/notesApi";

export const AllNotes = () => {

  const dispatch = useDispatch()
  const {data, error, isLoading} = useFetchNotesQuery({});

  useEffect(() => {
    dispatch(fetchNotes() as any)
  }, [dispatch])


  return (
    <div className="w-3/4 mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center">
        {isLoading && <p>Loading...</p>}
        {error && <p>failed</p>}
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
