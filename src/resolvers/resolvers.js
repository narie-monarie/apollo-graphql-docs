import db from "../db/_db.js";

export const resolvers = {
  Query: {
    reviews: () => db.reviews,
    review: (_, args) =>
      db.reviews.find((review) => review.id.toString() === args.id),

    games: () => db.games,
    game: (_, args) => db.games.find((game) => game.id.toString() === args.id),

    authors: () => db.authors,
    author: (_, args) =>
      db.authors.find((author) => author.id.toString() === args.id),
  },

  Game: {
    reviews: (parent) =>
      db.reviews.filter((r) => r.game_id.toString() === parent.id),
  },
  Author: {
    reviews: (parent) =>
      db.reviews.filter((r) => r.author_id.toString() === parent.id),
  },
  Review: {
    author: (parent) =>
      db.authors.filter((a) => a.id.toString() === parent.author_id),

    game: (parent) =>
      db.games.filter((g) => g.id.toString() === parent.game_id),
  },
};
