export const selectMovieDetailData = ({ Movies }: AppState) => ({
    isLoading: Movies.isLoading,
    item: Movies.item,
    items: Movies.items,
    query: Movies.query
});

export type PropsFromSelector = ReturnType<typeof selectMovieDetailData>;
