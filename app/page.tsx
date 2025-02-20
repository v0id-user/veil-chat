"use client";

import { useSelectionStore } from "@/store/selection";
import { lazy } from "react";
import Section from "@/enums/selection";
const ColorBanner = () => {
  return (
    <>
      <div className="w-full h-10 bg-[#DC0E11]"></div>
    </>
  );
};

const Chats = lazy(() => import("./Chats"));
export default function Home() {
  const { selectedSection } = useSelectionStore();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <ColorBanner />
      {/* lazy loading */}
      {selectedSection === Section.Chats && <Chats />}
    </main>
  );
}
