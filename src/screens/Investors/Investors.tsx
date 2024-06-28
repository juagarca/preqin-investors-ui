import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { InvestorsTable } from "../../components";

import { fetchInvestors } from "../../utils/api";
import ROUTES from "../../routes";

const Investors = () => {
  const navigate = useNavigate();

  const {
    data: investors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["investors"],
    queryFn: () => fetchInvestors(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !investors) return <div>Error!</div>;

  const handleRowClick = (firmId: number, firmName: string) => {
    navigate(`${ROUTES.investors}/${firmId}`, {
      state: { firmName: firmName },
    });
  };

  return (
    <div>
      <h1>Investors</h1>
      {investors.length > 1 ? (
        <InvestorsTable investors={investors} handleRowClick={handleRowClick} />
      ) : (
        <p>No investors found</p>
      )}
    </div>
  );
};

export default Investors;
