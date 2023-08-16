import React from "react";
import { Note } from "../models/Note";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeBody, changeTitle } from "../store/slices/formSlice";
import { editNewNote } from "../store/thunks/editNote";
import {
  useEditNoteMutation,
  useFetchSingleNoteQuery,
} from "../store/apis/notesApi";

export const EditNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValues = useSelector((state: any) => state.form);
  const { id } = useParams();
  const { data, error, isLoading } = useFetchSingleNoteQuery(id);
  const [editNote, { isError }] = useEditNoteMutation();
  const note: Note = data;

  const handleChange = (e: any) => {
    if (e.target.name === "title") {
      dispatch(changeTitle(e.target.value));
    } else {
      dispatch(changeBody(e.target.value));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      id: Number(id),
      userId: data.userId,
      title: formValues.title ? formValues.title : note.title,
      body: formValues.body ? formValues.body : note.body,
    };
    try {
      await editNote(payload);
      console.log(isError)
      if (!isError){
        navigate("/");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="number"
              name="id"
              id="id"
              className="hidden"
              defaultValue={note.id}
            />
            <input
              type="number"
              name="userId"
              id="userId"
              className="hidden"
              defaultValue={note.userId}
            />
            <label
              htmlFor="title"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={note.title}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="body"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Content
            </label>
            <textarea
              rows={8}
              name="body"
              id="body"
              defaultValue={note.body}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-zinc-800 py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
