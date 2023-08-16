import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const notesApi = createApi({
    reducerPath: 'notes',
    tagTypes: ['Notes'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/notes'
    }),
    endpoints(builder) {
        return {
            fetchNotes: builder.query({
                query: () => {
                    return {
                        method: 'GET'
                    }
                },
                providesTags: ['Notes']
            }),
            fetchSingleNote: builder.query({
                query: (id) => {
                    return {
                        url: `/${id}`,
                        method: 'GET'
                    }
                },
                providesTags: ['Notes']
            }),
            deleteNote: builder.mutation({
                query: (id) => {
                    return {
                        url: `/${id}`,
                        method: 'DELETE'
                    }
                },
                invalidatesTags: ['Notes']
            }),
            createNote: builder.mutation({
                query: (payload) => {
                    return {
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['Notes'],
            }),
            editNote: builder.mutation({
                query: (payload) => {
                    // console.log('in api', id, payload)
                    return {
                        url: `/${payload.id}`,
                        method: 'PUT',
                        body: payload
                    }
                },
                invalidatesTags: ['Notes'],
            }),
        }
    }
})

export const { useFetchNotesQuery, useFetchSingleNoteQuery, useCreateNoteMutation, useEditNoteMutation, useDeleteNoteMutation } = notesApi
export { notesApi }