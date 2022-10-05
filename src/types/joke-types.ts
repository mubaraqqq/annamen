export type IJoke = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories: IJokeCategory[];
  created_at: string;
  updated_at: string;
};

export type IJokeCategory =
  | "uncategorized"
  | "animal"
  | "career"
  | "celebrity"
  | "dev"
  | "explicit"
  | "fashion"
  | "food"
  | "history"
  | "money"
  | "movie"
  | "music"
  | "political"
  | "religion"
  | "science"
  | "sport"
  | "travel";
