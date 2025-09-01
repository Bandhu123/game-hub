import React from "react";
import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const EmojiMap = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default EmojiMap;
