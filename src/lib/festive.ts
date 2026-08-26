/**
 * Multi-Festival Festive Management for Sri Aditya Enterprises
 * Supported Festivals:
 * 1. Independence Day (August 15th)
 * 2. Sri Varalakshmi Vratham (August 20th - August 21st)
 * 3. Raksha Bandhan (August 24th - August 28th, 2026 - peaking on August 27th)
 * 
 * Query Parameter Preview Overrides:
 * - ?festive=raksha       -> Previews Raksha Bandhan theme
 * - ?festive=varalakshmi  -> Previews Sri Varalakshmi Vratham theme
 * - ?festive=independence -> Previews 80th Independence Day theme
 * - ?festive=true         -> Previews current festival (Raksha Bandhan)
 * - ?festive=false        -> Forces standard showroom theme
 */

export type FestivalType = "independence-day" | "varalakshmi-vratham" | "raksha-bandhan" | null;

export const getActiveFestival = (): FestivalType => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const festiveParam = params.get("festive")?.toLowerCase();

    if (festiveParam === "raksha" || festiveParam === "rakhibandhan" || festiveParam === "rakhi") {
      return "raksha-bandhan";
    }
    if (festiveParam === "varalakshmi" || festiveParam === "vratham") {
      return "varalakshmi-vratham";
    }
    if (festiveParam === "independence" || festiveParam === "iday") {
      return "independence-day";
    }
    if (festiveParam === "true") {
      // Default festive preview to upcoming Raksha Bandhan
      return "raksha-bandhan";
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

  // 2. Sri Varalakshmi Vratham 2026 Boundary (Aug 20 - Aug 21)
  const varalakshmiStart = new Date(currentYear, AUGUST, 20, 0, 0, 0, 0);
  const varalakshmiEnd = new Date(currentYear, AUGUST, 21, 23, 59, 59, 999);
  if (now >= varalakshmiStart && now <= varalakshmiEnd) {
    return "varalakshmi-vratham";
  }

  // 3. Raksha Bandhan 2026 Boundary (Active Aug 24, 00:00:00 to Aug 28, 23:59:59, peaking on Thursday Aug 27th)
  const rakhiStart = new Date(currentYear, AUGUST, 24, 0, 0, 0, 0);
  const rakhiEnd = new Date(currentYear, AUGUST, 28, 23, 59, 59, 999);
  if (now >= rakhiStart && now <= rakhiEnd) {
    return "raksha-bandhan";
  }

  return null;
};

export const isIndependenceDayActive = (): boolean => {
  return getActiveFestival() === "independence-day";
};

export const isVaralakshmiVrathamActive = (): boolean => {
  return getActiveFestival() === "varalakshmi-vratham";
};

export const isRakshaBandhanActive = (): boolean => {
  return getActiveFestival() === "raksha-bandhan";
};

export const isAnyFestiveActive = (): boolean => {
  return getActiveFestival() !== null;
};
