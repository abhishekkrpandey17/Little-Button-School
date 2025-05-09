"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CMSHeader from "@/app/components/CMSHeader";
import Footer from "../mainpage/footer";

type Tab = "add" | "update" | "delete";

export default function MessageCMS() {
  const [tab, setTab] = useState<Tab>("add");
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  const endpoint = API_BASE_URL + "api/v1/message";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (tab === "add") {
        await axios.post(endpoint, form, { withCredentials: true });
        alert("Message added");
      } else if (tab === "update") {
        await axios.put(endpoint, form, { withCredentials: true });
        alert("Message updated");
      } else if (tab === "delete") {
        await axios.delete(endpoint, {
          data: { email: form.email },
          withCredentials: true,
        });
        alert("Message deleted");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(
          "Operation failed: " + (err.response?.data?.error || err.message)
        );
      } else {
        alert("Operation failed: " + String(err));
      }
    }
  };

  return (
    <>
      <CMSHeader />
      <main className="bg-gray-100 min-h-screen py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
          Manage Messages
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
            type="email"
            name="email"
            placeholder="Email (unique identifier)"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          {(tab === "add" || tab === "update") && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded min-h-[120px]"
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
