import { useDispatch, useSelector } from "react-redux"
import { changeBody, changeTitle } from "../store/slices/formSlice"
import { useNavigate } from "react-router-dom";
import { addNewNote } from "../store/thunks/addNote";
import { Note } from "../models/Note";
import { useCreateNoteMutation } from "../store/apis/notesApi";


export const AddNote = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formValues = useSelector((state: any) => state.form)
    const [createNote, { isLoading, isError }] = useCreateNoteMutation();

    const handleChange = (e: any) => {
        if (e.target.name === "title") {
            dispatch(changeTitle(e.target.value))
        } else {
            dispatch(changeBody(e.target.value))
        }
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        
        const payload = {
          id: Date.now(),
          userId: Date.now() + 1,
          title: formValues.title,
          body: formValues.body,
        };
        try {
          await createNote(payload)
          navigate('/')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        {isLoading && <p>Editing note...</p>}
        {!isLoading && <form onSubmit={handleSubmit}>
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
              rows={8}
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
        </form>}
        {isError && <p>error</p>}
      </div>
    </div>
  )
}
