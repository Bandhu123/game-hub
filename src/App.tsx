import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelelctor from "./Components/SortSelelctor";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
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
        <NavBar />
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
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={GameQuery.platform}
            onSelectedPlatform={(platform: Platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
          />
          <SortSelelctor />
        </HStack>

        <GameGrid GameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
