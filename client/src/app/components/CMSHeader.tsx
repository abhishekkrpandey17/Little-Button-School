"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CMSHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  console.log(API_BASE_URL);
  // Check auth status on mount
  useEffect(() => {
    axios
      .get(API_BASE_URL + "api/v1/admin/check", { withCredentials: true })
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, [API_BASE_URL]);

  const handleLogout = async () => {
    try {
      await axios.get(API_BASE_URL + "api/v1/admin/logout", {
        withCredentials: true,
      });
      router.push("/cmslogin");
    } catch {
      alert("Logout failed");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-yellow-400 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-wide text-black">
        LittleButtons CMS
      </h1>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/cmslogin")}
          className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded transition"
        >
          Login
        </button>
      )}
    </header>
  );
}
