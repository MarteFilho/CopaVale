export interface Infractions {
  last_infraction_date: string;
  afk: number;
  leaver: number;
  qm_not_checkedin: number;
  qm_not_voted: number;
}

export interface Platforms {
  steam: string;
}

export interface Csgo {
  game_profile_id: string;
  region: string;
  regions?: any;
  skill_level_label: string;
  game_player_id: string;
  skill_level: number;
  faceit_elo: number;
  game_player_name: string;
}

export interface Games {
  csgo: Csgo;
}

export interface Settings {
  language: string;
}

export interface Iplayer {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  cover_featured_image: string;
  infractions: Infractions;
  platforms: Platforms;
  games: Games;
  settings: Settings;
  friends_ids: string[];
  bans: any[];
  new_steam_id: string;
  steam_id_64: string;
  steam_nickname: string;
  membership_type: string;
  memberships: string[];
  faceit_url: string;
}
