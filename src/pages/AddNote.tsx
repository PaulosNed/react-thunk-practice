import { useDispatch, useSelector } from "react-redux"
import { Note } from "../models/Note"
import { changeBody, changeTitle } from "../store/slices/formSlice"
import { addNote } from "../store/slices/notesSlice"
import { redirect } from "react-router-dom";


export const AddNote = () => {

    const dispatch = useDispatch()
    const formValues = useSelector((state: any) => state.form)

    const handleChange = (e: any) => {
        if (e.target.name === "title") {
            dispatch(changeTitle(e.target.value))
        } else {
            dispatch(changeBody(e.target.value))
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addNote(formValues))
        redirect('/')
    }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
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
              placeholder="Title"
              onChange={handleChange}
              value={formValues.title}
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
              rows={4}
              name="body"
              id="body"
              onChange={handleChange}
              value={formValues.body}
              placeholder="Type your content"
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
  )
}
