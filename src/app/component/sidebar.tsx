"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginAccount from "./login";
import Link from "next/link";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { CiLogout } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";


export default function Sidebar() {
  return (
    <header className="h-screen w-64 relative py-6 px-5 border-solid border-2 border-slate-200">
      <h1 className="text-center text-2xl font-extrabold text-blue-700 italic">
        <Link href="">lInk shorten.</Link>
      </h1>
      <div className="flex flex-col gap-2 mt-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-1 font-bold py-2 px-4 rounded focus:outline-none focus:bg-slate-200 focus:ring-blue-300"
        >
            <p><MdDashboard className="text-slate-400 text-xl font-bold" />
            </p>
          Dashboard
        </Link>
        <Link
          href="/dashboard/setting"
          className="flex items-center gap-1 mt-1 font-bold py-2 px-4 rounded focus:outline-none focus:bg-slate-200 focus:ring-blue-300"
        >
            <p><CiSettings className="text-slate-400 text-2xl font-bold"/>
            </p>
            
          Setting
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-3">
        <div className="flex justify-between gap-3">
          <Button
            variant="outline"
            className=" my-4 mx-4 mx-auto "
            onClick={() => {
              signOut(auth);
            }}
          >
            logout
            <CiLogout className=" text-2xl font-extrabold ml-1" />
          </Button>
        </div>
      </div>
    </header>
  );
}
