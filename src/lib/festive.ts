/**
 * Helper to determine if the Independence Day festive theme should be active.
 * - Activates automatically: August 15th at 00:00:00 (Midnight)
 * - Deactivates automatically: August 15th at 23:59:59 (11:59:59 PM)
 * 
 * Note: You can preview the festive theme anytime by appending ?festive=true to the URL
 * (e.g., http://localhost:8080/?festive=true or https://sriadityaenterprises.com/?festive=true)
 */
export const isIndependenceDayActive = (): boolean => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("festive") === "true") return true;
    if (params.get("festive") === "false") return false;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const AUGUST = 7; // JavaScript months are 0-indexed (0 = January, 7 = August)

  // Active ONLY on August 15th (00:00:00 to 23:59:59)
  const startDate = new Date(currentYear, AUGUST, 14, 10, 30, 0, 0); // Aug 15, 00:00:00
  const endDate = new Date(currentYear, AUGUST, 15, 23, 59, 59, 999); // Aug 15, 23:59:59

  return now >= startDate && now <= endDate;
};
