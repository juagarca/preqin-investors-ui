import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { AssetClassesDropdown, CommitmentInfoTable } from "../../components";
import { fetchCommitmentInfo } from "../../utils/api";
import { AssetClass } from "../../types";

const Investor = () => {
  const location = useLocation();
  const { investorId } = useParams<{ investorId: string }>();
  const { firmName } = location.state || {};
  const [assetClassSelected, setAssetClassSelected] = useState<
    AssetClass | undefined
  >(undefined);

  const {
    data: commitmentInfoList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["commitmentInfo", assetClassSelected],
    queryFn: () => fetchCommitmentInfo(assetClassSelected!, investorId!),
    enabled: !!investorId && !!assetClassSelected,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAssetClassSelected(event.target.value as AssetClass);
  };

  if (!firmName) {
    return <div>Error!</div>;
  }

  return (
    <div>
      <h1>{firmName}</h1>
      <AssetClassesDropdown
        assetClassSelected={assetClassSelected}
        handleChange={handleChange}
      />
      {isLoading ? (
        <p>Loading... </p>
      ) : error ? (
        <p>Error loading commitment information</p>
      ) : commitmentInfoList && commitmentInfoList.length > 0 ? (
        <CommitmentInfoTable commitmentInfoList={commitmentInfoList} />
      ) : (
        commitmentInfoList && <p>No commitment information found</p>
      )}
    </div>
  );
};

export default Investor;
