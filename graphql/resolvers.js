import { movies, getMovies, getMovieById, deleteMovie, addMovie } from "./DB/db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) =>  getMovieById(id)
    },
    Mutation: {
        addMovie: (_, { title, director, opening }) => addMovie(title, director, opening),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
}

export default resolvers;