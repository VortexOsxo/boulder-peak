export function formatDateWithHour(dateString: string) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

export function formatDateWithDay(dateString: string) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}