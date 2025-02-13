export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
    degree: string;
    averageRating: number;
}

export interface MovieListResponse {
    total: number;
    page: number;
    list: Movie[];
}
