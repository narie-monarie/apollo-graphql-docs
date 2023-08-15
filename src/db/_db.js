let games = [
  {
    id: 1,
    title: "Halo Infinite",
    platform: ["XBOX", "PC"],
  },
  {
    id: 2,
    title: "God of War Ragnarok",
    platform: ["PS5"],
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    platform: ["XBOX", "PS5", "PC"],
  },
  {
    id: 4,
    title: "The Elder Scrolls VI",
    platform: ["PC"],
  },
  {
    id: 5,
    title: "Horizon Forbidden West",
    platform: ["PS5"],
  },
];

let authors = [
  {
    id: 1,
    username: "john_doe",
    isVerified: true,
  },
  {
    id: 2,
    username: "jane_smith",
    isVerified: false,
  },
  {
    id: 3,
    username: "user123",
    isVerified: true,
  },
];

let reviews = [
  {
    id: 1,
    rating: 9,
    content: "Absolutely loved playing Halo Infinite on Xbox!",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 8,
    content: "God of War Ragnarok is a fantastic addition to the series.",
    author_id: 2,
    game_id: 2,
  },
  {
    id: 3,
    rating: 7,
    content: "Enjoyed Cyberpunk 2077, but encountered a few bugs on PC.",
    author_id: 3,
    game_id: 3,
  },
  {
    id: 4,
    rating: 10,
    content: "The Elder Scrolls VI exceeded my expectations!",
    author_id: 1,
    game_id: 4,
  },
  {
    id: 5,
    rating: 8,
    content: "Horizon Forbidden West showcases the PS5's capabilities.",
    author_id: 4,
    game_id: 5,
  },
  {
    id: 6,
    rating: 6,
    content: "Halo Infinite has potential, but needs improvements.",
    author_id: 2,
    game_id: 1,
  },
  {
    id: 7,
    rating: 9,
    content: "God of War Ragnarok's story is captivating.",
    author_id: 3,
    game_id: 2,
  },
  {
    id: 8,
    rating: 7,
    content:
      "Cyberpunk 2077's graphics are impressive, but gameplay needs work.",
    author_id: 4,
    game_id: 3,
  },
];

export default { games, authors, reviews };
