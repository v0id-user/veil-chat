"use client";

import { useSelectionStore } from "@/store/selection";
import { lazy } from "react";
import Section from "@/enums/selection";

const ColorBanner = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-[#DC0E11] -z-50"></div>
    </>
  );
};

const Chats = lazy(() => import("./Chats"));
export default function Home() {
  const { selectedSection } = useSelectionStore();

  return (
    <main className="flex flex-col h-screen">
      <ColorBanner />
      {/* lazy loading */}
      {selectedSection === Section.Chats && <Chats />}
    </main>
  );
}
