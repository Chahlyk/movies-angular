export interface IData {
  dates: IDates,
  page: number,
  results: IPoster[],
  total_pages: number,
  total_results: number
}

export interface IPoster {
  adult: boolean,
  backdrop_path: string,
  id: number,
  genre_ids?: Array<number>,
  original_language?: string,
  original_title: string,
  overview: string,
  popularity?: number,
  poster_path: string,
  release_date: string,
  title: string,
  video?: boolean,
  vote_average: number,
  vote_count?: number
}

export interface IDates {
  maximum: string,
  minimum: string
}
