import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelelctor, { SortItem } from "./Components/SortSelelctor";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortItem: SortItem | null;
  searchText: string | null;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //wider than 1024 px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText: string) =>
            setGameQuery({ ...GameQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectedGenre={(genre: Genre) =>
              setGameQuery({ ...GameQuery, genre })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding="20px">
        <Box paddingLeft={2}>
          <GameHeading gamequery={GameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectedPlatform={(platform: Platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            />
            <SortSelelctor
              selectedSortItem={GameQuery.sortItem}
              onClickSortSelector={(sortItem: SortItem) =>
                setGameQuery({ ...GameQuery, sortItem })
              }
            />
          </HStack>
        </Box>

        <GameGrid GameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
