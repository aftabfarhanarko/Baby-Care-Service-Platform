import FillFrom from "@/components/contact/FillFrom";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Care.xyz. We are here to help you with your care needs.",
};

const Contactpages = () => {
  return (
    <div className="pt-5 md:pt-20">
      <FillFrom></FillFrom>
    </div>
  );
};

export default Contactpages;
