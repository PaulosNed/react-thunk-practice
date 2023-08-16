import React from "react";
import { Link, useParams } from "react-router-dom";
import { Note } from "../models/Note";
import { useFetchSingleNoteQuery } from "../store/apis/notesApi";

export const NoteDetail = () => {
       
    const { id } = useParams()
    const {data, error, isLoading} = useFetchSingleNoteQuery(id);
    const note: Note = data
    
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 w-[32rem]">
        <header className="flex font-light text-sm">
          {/* <p>note CATAGORY</p> */}
        </header>

        {isLoading && <p>Loading...</p>}
        {data && <main>
          <h2 className="font-bold text-3xl mt-2">{note.title}</h2>
          <h3 className="font-bold text-xl mt-8"> </h3>
          <p className="font-light">{note.body}</p>
        </main>}
        {error && <p>{error as string}</p>}

        <Link
          to={`/edit/${id}`}
          className="bg-zinc-800 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group"
        >
          <p> Edit </p>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg> */}
        </Link>
      </div>
    </div>
  );
};
