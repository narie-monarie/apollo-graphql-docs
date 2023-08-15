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

    game: (_, args) => db.games.find((game) => game.id.toString() === args.id),

    author: (_, args) =>
      db.authors.find((author) => author.id.toString() === args.id),
  },

  Game: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.game_id.toString() === parent.id),
  },
  Author: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.author_id.toString() === parent.id),
  },
};
