import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Investor from "./Investor";

import ROUTES from "../../routes";
import investors from "../../utils/tests/mocks/investors.json";
import commitmentInfoList from "../../utils/tests/mocks/commitmentInfoList.json";

jest.mock("@tanstack/react-query");

describe("Investor component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (state = { firmName: investors[0].firm_name }) => {
    const path = `${ROUTES.investors}/${investors[0].firm_id}`;

    return render(
      <MemoryRouter initialEntries={[{ pathname: path, state }]}>
        <Routes>
          <Route path={ROUTES.investor} element={<Investor />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("matches the snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: commitmentInfoList,
      isLoading: false,
      error: false,
    });

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it("successfully renders on initial render", () => {
    (useQuery as jest.Mock).mockReturnValue({
      enabled: false,
    });

    renderComponent();

    expect(screen.getByText(investors[0].firm_name)).toBeInTheDocument();
    expect(screen.getByText(/Pick an asset class/)).toBeInTheDocument();
    expect(screen.queryByText("ID")).not.toBeInTheDocument();
    expect(screen.queryByText("Currency")).not.toBeInTheDocument();
    expect(screen.queryByText("Amount")).not.toBeInTheDocument();
  });

  it("renders the CommitmentInfoTable when selecting an asset class", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: commitmentInfoList,
      isLoading: false,
      error: false,
    });

    renderComponent();

    const selectElement = screen.getByText(/Pick an asset class/);
    fireEvent.change(selectElement, { target: { value: "PE" } });

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();

    commitmentInfoList.forEach((commitmentInfo) => {
      expect(screen.getByText(commitmentInfo.id)).toBeInTheDocument();
      expect(screen.getByText(commitmentInfo.currency)).toBeInTheDocument();
      expect(screen.getByText(commitmentInfo.amount)).toBeInTheDocument();
    });
  });

  it("renders message when no commitment information data found", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: false,
    });

    renderComponent();

    expect(
      screen.getByText("No commitment information found")
    ).toBeInTheDocument();
  });

  it('renders loading when fetching"', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    renderComponent();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error when a fetching error occurs", () => {
    (useQuery as jest.Mock).mockReturnValue({
      error: true,
    });

    renderComponent();

    expect(
      screen.getByText("Error loading commitment information")
    ).toBeInTheDocument();
  });

  it("renders error when accessing screen directly with url", () => {
    (useQuery as jest.Mock).mockReturnValue({
      error: true,
    });

    renderComponent({ firmName: "" });

    expect(screen.getByText("Error!")).toBeInTheDocument();
  });
});
