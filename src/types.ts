type AssetClass = "pe" | "pd" | "re" | "inf" | "nr" | "hf";

interface ICommitmentInfo {
  id: number;
  asset_class: AssetClass;
  firm_id: number;
  currency: string;
  amount: string;
}

interface IInvestor {
  firm_id: number;
  firm_name: string;
  AUM: number;
  date_added: string;
  last_updated: string;
  established_at: string;
  firm_type: string;
  city: string;
  country: string;
  address: string;
  postal_code: string;
}

export type { AssetClass, ICommitmentInfo, IInvestor };
