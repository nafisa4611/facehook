export const getDateDifferenceFromNow = (fromDate) => {
    const now = new Date();
    const past = new Date(fromDate);

    let years = now.getFullYear() - past.getFullYear();
    let months = now.getMonth() - past.getMonth();
    let days = now.getDate() - past.getDate();

    // Adjust for negative days (if the current day is before the 'fromDate' day)
    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of the previous month
        days += prevMonth.getDate();
    }

    // Adjust for negative months (if the current month is before the 'fromDate' month)
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const parts = [];
    if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`);
    if (months) parts.push(`${months} month${months > 1 ? 's' : ''}`);
    if (days || parts.length === 0) 
        parts.push(`${days} day${days > 1 ? 's' : ''}`);

    return parts.join(" ");
};
