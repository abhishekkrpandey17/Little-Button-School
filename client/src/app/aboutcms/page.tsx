"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CMSHeader from "@/app/components/CMSHeader";
import Footer from "../mainpage/footer";
type Tab = "add" | "update" | "delete";

export default function AboutCMS() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("add");
  const [form, setForm] = useState({
    slogan: "",
    description: "",
    image: null as File | null,
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  const endpoint = API_BASE_URL + "api/v1/about";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, image: e.target.files[0] });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("slogan", form.slogan);
    formData.append("description", form.description);
    if (form.image) formData.append("image", form.image);

    try {
      if (tab === "add") {
        await axios.post(endpoint, formData, {
          withCredentials: true,
        });
        alert("Added successfully");
      } else if (tab === "update") {
        await axios.put(endpoint, formData, {
          withCredentials: true,
        });
        alert("Updated successfully");
      } else if (tab === "delete") {
        await axios.delete(endpoint, {
          data: { slogan: form.slogan },
          withCredentials: true,
        });
        alert("Deleted successfully");
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
      <main className="bg-gray-100 min-h-screen py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
          Manage About Section
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

        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
          {(tab === "add" || tab === "update") && (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
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
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {tab === "add" ? "Add" : "Update"}
              </button>
            </form>
          )}

          {tab === "delete" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This will delete the about section using the slogan.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
