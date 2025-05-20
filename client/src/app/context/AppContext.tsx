"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Schema-based types
export interface Gallery {
  _id: string;
  images: string[];
  description: string;
}

export interface ExtraContent {
  _id: string;
  title: string;
  slogan: string;
  name: string;
  description: string;
}

interface AppContextType {
  gallery: Gallery[];
  extra: ExtraContent[];
  setGallery: (data: Gallery[]) => void;
  setExtra: (data: ExtraContent[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  progress: number;
  setProgress: (value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [extra, setExtra] = useState<ExtraContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <AppContext.Provider
      value={{
        gallery,
        extra,
        setGallery,
        setExtra,
        loading,
        setLoading,
        progress,
        setProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
