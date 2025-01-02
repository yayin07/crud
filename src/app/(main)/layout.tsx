import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#F2F4F7]">
      <Header />
      <div className="flex-grow flex flex-col max-w-[1366px] mx-auto bg-blue-100/80 w-full h-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
