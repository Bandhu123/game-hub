import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import croppedImageURL from "../services/image-url";
import { Image, Text } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppedImageURL(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
