"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CMSHeader from "@/app/components/CMSHeader";
import Footer from "../mainpage/footer";
export default function CMSLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        API_BASE_URL + "api/v1/admin/login",
        { email, password },
        { withCredentials: true }
      );
      router.push("/cmsdashboard");
    } catch {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <CMSHeader />
      <div className="flex items-center justify-center pb-24 pt-20 bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4 text-black"
        >
          <h2 className="text-center text-2xl font-bold">CMS Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
