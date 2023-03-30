import ms from "ms";
import {
  format,
  formatDistanceToNow,
  formatRelative,
  isToday,
  isThisWeek,
  isThisMonth,
} from "date-fns";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export const nFormatter = (num: number, digits?: number) => {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
};

export const capitalize = (str: string) => {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const formatDate = (dateString: string | Date) => {
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;

  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (isThisWeek(date)) {
    return formatRelative(date, new Date());
  } else if (isThisMonth(date)) {
    return format(date, "EEEE");
  } else {
    return format(date, "MMMM dd, yyyy");
  }
};
