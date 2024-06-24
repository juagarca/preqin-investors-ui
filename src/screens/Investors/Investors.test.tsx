import { fireEvent, render, screen } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Investors from "./Investors";

import investors from "../../utils/tests/mocks/investors.json";
import ROUTES from "../../routes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
jest.mock("@tanstack/react-query");

describe("Investors component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter initialEntries={[ROUTES.investors]}>
        <Routes>
          <Route path={ROUTES.investors} element={<Investors />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("matches the snapshot", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: investors,
      isLoading: false,
      error: false,
    });

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders successfully when investors data is found", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: investors,
      isLoading: false,
      error: false,
    });

    renderComponent();

    expect(screen.getByText("Investors")).toBeInTheDocument();

    investors.forEach((investor) => {
      expect(screen.getByText(investor.firm_name)).toBeInTheDocument();
    });
  });

  it("navigates to the correct route when clicking on a row", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: investors,
      isLoading: false,
      error: false,
    });

    renderComponent();

    const rows = screen.getAllByRole("row");
    fireEvent.click(rows[1]);

    expect(mockNavigate).toHaveBeenCalledWith(
      `${ROUTES.investors}/${investors[0].firm_id}`,
      {
        state: { firmName: investors[0].firm_name },
      }
    );
  });

  it("renders message when no investors data found", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: false,
    });

    renderComponent();

    expect(screen.getByText("No investors found")).toBeInTheDocument();
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

    expect(screen.getByText("Error!")).toBeInTheDocument();
  });
});
