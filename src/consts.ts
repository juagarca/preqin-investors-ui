const assetClass = {
  PE: "pe",
  PD: "pd",
  RE: "re",
  INF: "inf",
  NR: "nr",
  HF: "hf",
};

const assetClasses = [
  { value: assetClass.PE, label: "Private Equity" },
  { value: assetClass.PD, label: "Private Debt" },
  { value: assetClass.RE, label: "Real Estate" },
  { value: assetClass.INF, label: "Infrastructure" },
  { value: assetClass.NR, label: "Natural Resources" },
  { value: assetClass.HF, label: "Hedge Funds" },
];

export { assetClass, assetClasses };
