"use client";
import { useAppContext } from "../context/AppContext";

const Loader = () => {
  const { progress } = useAppContext();

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-xl z-50 flex flex-col items-center justify-center">
      <h2 className="text-[#933194] text-3xl font-bold mb-4">
        Loading... {progress}%
      </h2>
      <div className="w-64 h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#933194] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
