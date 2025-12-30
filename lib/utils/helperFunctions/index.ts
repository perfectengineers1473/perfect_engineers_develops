import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

export const groupItems = <T,>(items: T[], size: number): T[][] => {
    const data: T[][] = [];
    for (let i = 0; i < items?.length; i += size) {
        data?.push(items?.slice(i, i + size));
    }
    return data;
};

export const generateFormattedIndex = (index: number) => {
    const updatedCount = index + 1;
    const formattedIndex =
        updatedCount < 10 ? `0${updatedCount}` : updatedCount;
    return formattedIndex;
};
