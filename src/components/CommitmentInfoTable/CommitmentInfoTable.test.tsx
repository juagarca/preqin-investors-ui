import React from "react";
import { render, screen } from "@testing-library/react";

import CommitmentInfoTable from "./CommitmentInfoTable";

import { ICommitmentInfo } from "../../types";
import commitmentInfoList from "../../utils/tests/mocks/commitmentInfoList.json";

describe("CommitmentInfoTable", () => {
  const renderComponent = () =>
    render(
      <CommitmentInfoTable
        commitmentInfoList={commitmentInfoList as ICommitmentInfo[]}
      />
    );

  it("matches the snapshot", () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders table rows with correct data", () => {
    renderComponent();

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();

    commitmentInfoList.forEach((commitmentInfo) => {
      expect(screen.getByText(commitmentInfo.id)).toBeInTheDocument();
      expect(screen.getByText(commitmentInfo.currency)).toBeInTheDocument();
      expect(screen.getByText(commitmentInfo.amount)).toBeInTheDocument();
    });
  });
});
