import React from "react";

import Testimonials from "./Testimonials";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { CallToAction } from "./CallToAction";

export const Home: React.FC = () => {
  return (
    <>
      <CallToAction />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};
