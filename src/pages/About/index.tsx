import React from "react";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Container from "../../components/Container";

const About: React.FC = () => {
  return (
    <Container>
      <section className="mb-4">
        <a href="https://www.inscale.net/">
          <Logo />
        </a>
        <p className="text-2xl">
          This is an assessment for INSCALE which is done by Alireza Safian. It
          is React application and includes a table component which displays
          list of employees&lsquo; details.
        </p>
      </section>
    </Container>
  );
};

export default About;
