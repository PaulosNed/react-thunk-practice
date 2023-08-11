import React from "react";
import { Note } from "../models/Note";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/slices/notesSlice";
import { MdDelete } from "react-icons/md";

export const NoteCard: React.FC<Note> = ({ id, userId, title, body }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="relative w-1/2 mx-auto p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      {/* <img
        src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      /> */}
      <div className="p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-900">{title}</h4>
            <p className="text-gray-600">{body.slice(0, 150)}...</p>
          </div>
          <Link
            to={`/note/${id}`}
            className="block w-max text-cyan-600 hover:cursor-pointer hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>

      <div
        className="absolute right-5 top-5  cursor-pointer"
        onClick={deleteItem}
      >
        <MdDelete style={{ color: "red" }} size={32}/>
      </div>
    </div>
  );
};
