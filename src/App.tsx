import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { AllNotes } from './pages/AllNotes';
import { NoteDetail } from './pages/NoteDetail';
import { EditNote } from './pages/EditNote';
import { AddNote } from './pages/AddNote';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<AllNotes />}/>
        <Route path="note/:id" element={<NoteDetail />}/>
        <Route path="edit/:id" element={<EditNote />}/>
        <Route path="add" element={<AddNote />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
