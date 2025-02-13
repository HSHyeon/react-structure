export const PATH = {
    root: "/",
    login: "/login",
    register: "/register",
    cinema: "/cinema",
    movieDetail: (id: string) => `/movie/${id}`,
    writeMovie: "/movie/write",
    updateRole: "/user/role",
    updateMovie: (id: string) => `/movie/update/${id}`,
    review: (id: string) => `/review/${id}`,
    writeReview: (id: string) => `/review/write/${id}`,
    updateReview: (id: string) => `/review/update/${id}`,
};
