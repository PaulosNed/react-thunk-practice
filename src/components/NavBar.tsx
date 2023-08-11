import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="flex justify-end">
    <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <Link
          to={"/"}
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          Notes
        </Link>
        <Link
          to={"/add"}
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          Add Note
        </Link>
      </div>
    </div>
  </nav>
  )
}
