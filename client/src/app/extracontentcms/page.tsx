"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CMSHeader from "@/app/components/CMSHeader";
import Footer from "../mainpage/footer";

type Tab = "add" | "update" | "delete";

export default function ExtraContentCMS() {
  const [tab, setTab] = useState<Tab>("add");
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slogan: "",
    description: "",
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  const endpoint = API_BASE_URL + "api/v1/extra";

  useEffect(() => {
    axios
      .get(API_BASE_URL + "api/v1/admin/check", { withCredentials: true })
      .then(() => {})
      .catch(() => router.push("/cmslogin"));
  }, [API_BASE_URL, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (tab === "add") {
        await axios.post(endpoint, form, { withCredentials: true });
        alert("Extra content added");
      } else if (tab === "update") {
        await axios.put(endpoint, form, { withCredentials: true });
        alert("Extra content updated");
      } else {
        await axios.delete(endpoint, {
          data: { title: form.title },
          withCredentials: true,
        });
        alert("Extra content deleted");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data?.error || "Operation failed");
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <CMSHeader />
      <main className="bg-gray-100 py-10 min-h-screen">
        <h2 className="text-2xl text-center text-blue-900 font-bold mb-6">
          Manage Extra Content
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          {["add", "update", "delete"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as Tab)}
              className={`px-4 py-2 rounded ${
                tab === t
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {(tab === "add" || tab === "update") && (
            <>
              <input
                name="slogan"
                placeholder="Slogan"
                value={form.slogan}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </>
          )}
          <button
            onClick={handleSubmit}
            className={`w-full py-2 text-white rounded ${
              tab === "delete" ? "bg-red-600" : "bg-blue-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        </div>
      </main>
      <Footer />{" "}
    </>
  );
}
