export interface Post {
    id?: string;
    title: string;
    content: string;
    username?: string;
    likes?: number;
    sads?: number;
    loves?: number;
    contact?: string;
    timestamp?: Date;
}