import React from "react";
import { render, screen } from "@testing-library/react";

import InvestorsTable from "./InvestorsTable";

import { capitalize, formatDate } from "../../utils/helpers";
import investors from "../../utils/tests/mocks/investors.json";

describe("InvestorsTable", () => {
  const renderComponent = () => {
    return render(
      <InvestorsTable investors={investors} handleRowClick={() => jest.fn} />
    );
  };

  it("matches the snapshot", () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders table rows with correct data", () => {
    renderComponent();

    expect(screen.getByText("Firm ID")).toBeInTheDocument();
    expect(screen.getByText("Firm Name")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Date added")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();

    investors.forEach((investor) => {
      expect(screen.getByText(investor.firm_id)).toBeInTheDocument();
      expect(screen.getByText(investor.firm_name)).toBeInTheDocument();
      expect(
        screen.getByText(capitalize(investor.firm_type))
      ).toBeInTheDocument();
      expect(
        screen.getByText(formatDate(investor.date_added))
      ).toBeInTheDocument();
      expect(screen.getByText(investor.address)).toBeInTheDocument();
    });
  });
});
