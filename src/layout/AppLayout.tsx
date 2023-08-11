import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const AppLayout = () => {
  return (
    <div className="flex flex-col gap-10 bg-zinc-200 min-h-screen">
      <header className="w-full bg-black bg-opacity-95 pt-8 pb-2">
        <div className="w-full flex justify-between items-end px-12">
          <p className="text-white text-3xl">Contact Manager</p>
          <NavBar />
        </div>
      </header>
      <main className="my-5">
        <Outlet />
      </main>
    </div>
  );
};
