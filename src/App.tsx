import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";

function App() {
  const [selelctedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            selectedGenre={selelctedGenre}
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding="20px">
        <PlatformSelector />
        <GameGrid selectedGenre={selelctedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
