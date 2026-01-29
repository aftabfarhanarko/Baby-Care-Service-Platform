import FullAboutPages from "@/components/about/FullAboutPages";
import Header from "@/components/about/Header";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "Learn more about Care.xyz and our mission to provide the best care services.",
};

const Aboutpage = () => {
  return (
    <div>
      <Header />
      <FullAboutPages />
    </div>
  );
};

export default Aboutpage;
