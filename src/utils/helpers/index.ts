const capitalize = (string: string): string => {
  if (string.length === 0) return string;

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getUTCFullYear();
  const dayWithSuffix =
    day +
    ["th", "st", "nd", "rd"][
      day % 10 > 3 || Math.floor((day % 100) / 10) === 1 ? 0 : day % 10
    ];

  return `${dayWithSuffix} ${month} ${year}`;
};

export { capitalize, formatDate };
