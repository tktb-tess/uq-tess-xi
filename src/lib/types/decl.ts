export type SwadeshList = {
    value: string[][];
};

export type Success<T extends object> = (T & {
    success: true;
}) | {
    success: false;
    status: number;
    message: string;
};
