import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";


export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[];
  metacritic:number;
  rating_top:number;
}


const useGames = (gameQuery:GameQuery) =>useData<Game>("/games", {
  params:{
    genres:gameQuery.genre?.id,
    platform:gameQuery.platform?.id, 
    ordering:gameQuery.sortItem?.value,
    search:gameQuery.searchText
  }}, [gameQuery]);
export default useGames;