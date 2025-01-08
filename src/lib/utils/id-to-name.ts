export function idToName(id: string): string {
    return id.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}