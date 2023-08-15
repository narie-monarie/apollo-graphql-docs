import db from "../db/_db.js";

export const resolvers = {
  Query: {
    games: () => db.games,
  },
};
