/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CMSHeader from "@/app/components/CMSHeader";
import Footer from "../mainpage/footer";

type Tab = "add" | "update" | "delete";

export default function TimingCMS() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("add");
  const [form, setForm] = useState({
    day: "",
    open: "",
    close: "",
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  const endpoint = API_BASE_URL + "api/v1/timing";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(API_BASE_URL + "api/v1/admin/check", {
          withCredentials: true,
        });
      } catch {
        router.push("/cmslogin");
      }
    };
    checkAuth();
  }, [router, API_BASE_URL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (tab === "add") {
        await axios.post(endpoint, form, { withCredentials: true });
        alert("Timing added successfully");
      } else if (tab === "update") {
        await axios.put(endpoint, form, { withCredentials: true });
        alert("Timing updated successfully");
      } else if (tab === "delete") {
        await axios.delete(endpoint, {
          data: { day: form.day },
          withCredentials: true,
        });
        alert("Timing deleted successfully");
      }
    } catch (err: any) {
      alert("Operation failed: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <>
      <CMSHeader />
      <main className="bg-gray-100 min-h-screen py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
          Manage Timings
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          {["add", "update", "delete"].map((option) => (
            <button
              key={option}
              onClick={() => setTab(option as Tab)}
              className={`px-4 py-2 rounded ${
                tab === option
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md space-y-4">
          <input
            type="text"
            name="day"
            placeholder="Day (e.g. Monday)"
            value={form.day}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {(tab === "add" || tab === "update") && (
            <>
              <input
                type="text"
                name="open"
                placeholder="Opening Time"
                value={form.open}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="close"
                placeholder="Closing Time"
                value={form.close}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </>
          )}
          <button
            onClick={handleSubmit}
            className={`w-full py-2 rounded text-white ${
              tab === "delete"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
