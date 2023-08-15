import db from "../db/_db.js";

export const resolvers = {
  Query: {
    //Get All
    games: () => db.games,
    reviews: () => db.reviews,
    authors: () => db.authors,

    //Get By ID
    review: (_, args) =>
      db.reviews.find((review) => review.id.toString() === args.id),

    review: (_, args) =>
      db.games.find((game) => game.id.toString() === args.id),

    review: (_, args) =>
      db.authors.find((author) => author.id.toString() === args.id),
  },
};
