export interface ITvSchedule {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image?: string;
  name: string;
  number: number;
  runtime: number;
  season: number;
  show: ITvShow;
  summary: string;
  type: string;
  url: string;
}

export interface ITvShow {
  externals: ITvShowExternals;
  genres: string[];
  id: number;
  image: ITvShowImage;
  language: string;
  name: string;
  network: ITvShowNetwork;
  officialSite: string;
  premiered: string;
  rating: ITvShowRating;
  runtime: number;
  schedule: ITvShowSchedule;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel?: string | number | null;
  weight: number;
  _links: ITvShowLinks;
  _embedded: ITvShowEmbedded;
}

export interface ITvShowEmbedded {
  cast: ITvShowCast[];
}

export interface ITvShowCast {
  person: ITvShowPerson;
  character: ITvShowCharacter;
  self: boolean;
  voice: boolean;
}

export interface ITvShowCharacter {
  id: number;
  url: string;
  name: string;
  image?: ITvShowImage;
  _links: ITvShowLinksMeta;
}

export interface ITvShowLinksMeta {
  self: {
    href: string;
  };
}

export interface ITvShowPerson {
  id: number;
  url: string;
  name: string;
  country: ITvShowCountry;
  birthday: string;
  deathday?: string;
  gender: string;
  image: ITvShowImage;
  _links: ITvShowLinksMeta;
}

export interface ITvShowImage {
  medium: string;
  original: string;
}

export interface ITvShowExternals {
  tvrage?: string;
  thetvdb: number;
  imdb: string;
}

export interface ITvShowRating {
  average: number;
}

export interface ITvShowSchedule {
  time: string;
  days: string[];
}

export interface ITvShowCountry {
  code: string;
  name: string;
  timezone: string;
}

export interface ITvShowNetwork {
  id: number;
  name: string;
  country: ITvShowCountry;
}

export interface ITvShowLink {
  href: string;
}

export interface ITvShowLinks {
  nextepisode: ITvShowLink;
  previousepisode: ITvShowLink;
  self: ITvShowLink;
}
