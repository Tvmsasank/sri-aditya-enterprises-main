/**
 * Multi-Festival & Special Promotion Management for Sri Aditya Enterprises
 * Supported Festivals & Offers:
 * 1. Independence Day (August 15th)
 * 2. Sri Varalakshmi Vratham (August 20th - August 21st)
 * 3. Raksha Bandhan (August 24th - August 28th)
 * 4. Great Sleepwell Festival (Active from September 7th onwards - Flat 25% OFF / 100% Cashback)
 * 
 * Query Parameter Preview Overrides:
 * - ?offer=sleepwell / ?festive=sleepwell -> Previews Great Sleepwell Festival offer
 * - ?festive=raksha                        -> Previews Raksha Bandhan theme
 * - ?festive=varalakshmi                   -> Previews Sri Varalakshmi Vratham theme
 * - ?festive=independence                  -> Previews 80th Independence Day theme
 * - ?festive=true                          -> Previews current active offer (Great Sleepwell Festival)
 * - ?festive=false                         -> Forces standard showroom theme
 */

export type FestivalType = "independence-day" | "varalakshmi-vratham" | "raksha-bandhan" | "sleepwell-festival" | null;

export const getActiveFestival = (): FestivalType => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const festiveParam = params.get("festive")?.toLowerCase() || params.get("offer")?.toLowerCase();

    if (festiveParam === "sleepwell" || festiveParam === "sleepwell-festival" || festiveParam === "greatsleepwell") {
      return "sleepwell-festival";
    }
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
      // Default active promotion to Great Sleepwell Festival starting Sept 7th
      return "sleepwell-festival";
    }
    if (festiveParam === "false") {
      return null;
    }
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const AUGUST = 7; // 0-indexed (7 = August)
  const SEPTEMBER = 8; // 0-indexed (8 = September)

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

  // 3. Raksha Bandhan 2026 Boundary (Aug 24 - Aug 28)
  const rakhiStart = new Date(currentYear, AUGUST, 24, 0, 0, 0, 0);
  const rakhiEnd = new Date(currentYear, AUGUST, 28, 23, 59, 59, 999);
  if (now >= rakhiStart && now <= rakhiEnd) {
    return "raksha-bandhan";
  }

  // 4. Great Sleepwell Festival Offer Boundary (Starts Sept 7th, active Sept 7 - Sept 30)
  const sleepwellStart = new Date(currentYear, SEPTEMBER, 7, 0, 0, 0, 0);
  const sleepwellEnd = new Date(currentYear, SEPTEMBER, 30, 23, 59, 59, 999);
  if (now >= sleepwellStart && now <= sleepwellEnd) {
    return "sleepwell-festival";
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

export const isSleepwellFestivalActive = (): boolean => {
  return getActiveFestival() === "sleepwell-festival";
};

export const isAnyFestiveActive = (): boolean => {
  return getActiveFestival() !== null;
};
