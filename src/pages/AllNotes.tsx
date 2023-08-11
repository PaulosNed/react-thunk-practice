import React from 'react'
import { Note } from '../models/Note'
import { NoteCard } from '../components/NoteCard'
import { useSelector } from 'react-redux'

export const AllNotes = () => {

    const notes: Note[] = useSelector((state: any) => state.notes)
    
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex flex-col gap-4 items-center">
        {notes &&
          notes.map((note: Note) => (
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
  )
}
