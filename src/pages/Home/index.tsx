import React from "react";

import { EMPLOYEES, HEADERS } from "../../constants";
import Container from "../../components/Container";
import Table from "../../components/Table";
import InfoCard from "../../components/InfoCard";

const Home: React.FC = () => {
  const employees = [...EMPLOYEES];
  const headers = [...HEADERS];
  const totalEmployee = employees.length;
  let highestSalary = employees[0].salary,
    recentEmployee = "";

  employees.sort(function (a, b) {
    const keyA = new Date(a.dateJoined),
      keyB = new Date(b.dateJoined);
    highestSalary = highestSalary > b.salary ? highestSalary : b.salary;

    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  recentEmployee = employees[employees.length - 1].dateJoined;

  return (
    <Container>
      <section className="text-gray-600 body-font">
        <InfoCard
          totalEmployee={totalEmployee}
          highestSalary={highestSalary}
          recentEmployee={recentEmployee}
        />
        <Table data={employees} headers={headers} />
      </section>
    </Container>
  );
};

export default Home;
