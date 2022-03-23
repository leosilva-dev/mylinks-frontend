import React from "react";

import { Community } from "./Community";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { CallToAction } from "./CallToAction";

export const Home: React.FC = () => {
  return (
    <>
      <CallToAction />
      <Features />
      <Community />
      <Footer />
    </>
  );
};
