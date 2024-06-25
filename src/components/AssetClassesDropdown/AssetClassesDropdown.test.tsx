import React from "react";
import { render, screen } from "@testing-library/react";

import AssetClassesDropdown from "./AssetClassesDropdown";

describe("AssetClassesDropdown component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <AssetClassesDropdown
        assetClassSelected={undefined}
        handleChange={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with initial option", () => {
    render(
      <AssetClassesDropdown
        assetClassSelected={undefined}
        handleChange={() => {}}
      />
    );

    expect(screen.getByText(/Pick an asset class/)).toBeInTheDocument();
  });
});
