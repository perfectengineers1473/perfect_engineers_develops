import { clsx, type ClassValue } from 'clsx'
import { SANITY_WRITE_TOKEN } from '../../constants';
import { getClient } from '../../sanity';

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

const client = getClient(SANITY_WRITE_TOKEN);

export const uploadFiles = async (files: File[]) => {
    try {
        const uploadedFiles = await Promise.all(files?.map((file) => {
            const asset = client?.assets?.upload('file', file);
            return asset
        }));
        return uploadedFiles?.map(file => ({
            _type: "file",
            _key: file?._id,
            asset: {
                _type: "reference",
                _ref: file?._id,
            },
        }))
    } catch (error) {
        console.error("Error uploading files:", error);
        return [];
    }
};