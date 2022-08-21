export const selectMovieData = ({ Movies }: any) => ({
    isLoading: Movies.isLoading,
    items: Movies.items,
    query: Movies.query
});

export type PropsFromSelector = ReturnType<typeof selectMovieData>;
