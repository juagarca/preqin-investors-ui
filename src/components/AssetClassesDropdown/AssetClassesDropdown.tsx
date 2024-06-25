import { ChangeEventHandler } from "react";

import { assetClasses } from "../../consts";
import { AssetClass } from "../../types";

import "./styles.css";

interface AssetClassesDropdownProps {
  assetClassSelected: AssetClass | undefined;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const AssetClassesDropdown = ({
  assetClassSelected,
  handleChange,
}: AssetClassesDropdownProps) => {
  return (
    <div className="investors-dropdown">
      <select id="dropdown" value={assetClassSelected} onChange={handleChange}>
        <option value="">
          Pick an asset class to show its commitment information
        </option>
        {assetClasses.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssetClassesDropdown;
