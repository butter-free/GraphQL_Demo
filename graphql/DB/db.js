export let movies = [
    {
        id: 1,
        title: "The Upside",
        director: "Neil Burger",
        opening: "January 11, 2019"
    },
    {
        id: 2,
        title: "Glass",
        director: "M. Night Shyamalan",
        opening: "January 18, 2019"
    },
    {
        id: 3,
        title: "Serenity",
        director: "Steven Knight",
        opening: "January 25, 2019"
    },
    {
        id: 4,
        title: "What Men Want",
        director: "Adam Shankman",
        opening: "February 8, 2019"
    },
    {
        id: 5,
        title: "The LEGO Movie 2: The Second Part",
        director: "Mike Mitchell, Trisha Gum",
        opening: "February 8, 2019"
    },
    {
        id: 6,
        title: "Alita: Battle Angel",
        director: "Robert Rodriguez",
        opening: "February 14, 2019"
    },
    {
        id: 7,
        title: "How to Train Your Dragon: The Hidden World",
        director: "Dean DeBlois",
        opening: "February 22, 2019"
    },
    {
        id: 8,
        title: "Captain Marvel",
        director: "Anna Boden, Ryan Fleck",
        opening: "March 8, 2019"
    },
    {
        id: 9,
        title: "Under the Silver Lake",
        director: "David Robert Mitchell",
        opening: "April 19, 2019"
    },
    {
        id: 10,
        title: "Avengers: Endgame",
        director: "Joe Russo, Anthony Russo",
        opening: "April 26, 2019"
    }
];

export const getMovies = () => movies;

export const getMovieById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (title, director, opening) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        title,
        director,
        opening
    };
    movies.push(newMovie);
    return newMovie;
};