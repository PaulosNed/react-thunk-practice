import React from 'react'
import { Note } from '../models/Note'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useParams } from 'react-router-dom'
import { editNote } from '../store/slices/notesSlice'
import { changeBody, changeTitle } from '../store/slices/formSlice'

export const EditNote = () => {
    
    const dispatch = useDispatch()
    const formValues = useSelector((state: any) => state.form)
    const notes: Note[] = useSelector((state: any) => state.notes)
    const { id } = useParams()
    const note = notes.filter((n: Note) => n.id === Number(id))[0]
    

    const handleChange = (e: any) => {
        if (e.target.name === "title") {
            dispatch(changeTitle(e.target.value))
        } else {
            dispatch(changeBody(e.target.value))
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        const payload = {
            id: Number(id),
            title: formValues.title ? formValues.title : note.title,
            body: formValues.body ? formValues.body: note.body,
        }
        dispatch(editNote(payload))
        redirect('/')
    }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input type="number" name="id" id="id" className="hidden" defaultValue={note.id}/>
            <input type="number" name="userId" id="userId" className="hidden" defaultValue={note.userId}/>
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
              rows={4}
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
  )
}
