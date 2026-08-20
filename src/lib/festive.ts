/**
 * Multi-Festival Festive Management for Sri Aditya Enterprises
 * Supported Festivals:
 * 1. Independence Day (August 15th)
 * 2. Sri Varalakshmi Vratham (Active NOW from August 20th 00:00:00 until August 21st 23:59:59)
 * 
 * Query Parameter Preview Overrides:
 * - ?festive=varalakshmi  -> Previews Sri Varalakshmi Vratham theme
 * - ?festive=independence -> Previews 80th Independence Day theme
 * - ?festive=true         -> Previews current festival (Varalakshmi Vratham)
 * - ?festive=false        -> Forces standard showroom theme
 */

export type FestivalType = "independence-day" | "varalakshmi-vratham" | null;

export const getActiveFestival = (): FestivalType => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const festiveParam = params.get("festive")?.toLowerCase();

    if (festiveParam === "varalakshmi" || festiveParam === "vratham") {
      return "varalakshmi-vratham";
    }
    if (festiveParam === "independence" || festiveParam === "iday") {
      return "independence-day";
    }
    if (festiveParam === "true") {
      return "varalakshmi-vratham";
    }
    if (festiveParam === "false") {
      return null;
    }
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const AUGUST = 7; // JavaScript months are 0-indexed (0 = January, 7 = August)

  // 1. Independence Day Boundary (Aug 15)
  const idayStart = new Date(currentYear, AUGUST, 15, 0, 0, 0, 0);
  const idayEnd = new Date(currentYear, AUGUST, 15, 23, 59, 59, 999);
  if (now >= idayStart && now <= idayEnd) {
    return "independence-day";
  }

  // 2. Sri Varalakshmi Vratham 2026 Boundary
  // Active NOW (Aug 20, 00:00:00) and automatically stops on August 21st at 23:59:59 (11:59:59 PM)
  const varalakshmiStart = new Date(currentYear, AUGUST, 20, 0, 0, 0, 0);
  const varalakshmiEnd = new Date(currentYear, AUGUST, 21, 23, 59, 59, 999);
  if (now >= varalakshmiStart && now <= varalakshmiEnd) {
    return "varalakshmi-vratham";
  }

  return null;
};

export const isIndependenceDayActive = (): boolean => {
  return getActiveFestival() === "independence-day";
};

export const isVaralakshmiVrathamActive = (): boolean => {
  return getActiveFestival() === "varalakshmi-vratham";
};

export const isAnyFestiveActive = (): boolean => {
  return getActiveFestival() !== null;
};
