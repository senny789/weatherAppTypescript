import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
interface props {
  weeks: string;
  temps: number;
  icon: any;
  index: number;
  centi: boolean;
}
const Weather: React.FC<props> = (props) => {
  const image = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const fah = props.temps * (9 / 5) + 32;
  return (
    <Box
      textAlign="center"
      justifyContent="center"
      backgroundColor={props.index === 0 ? "#90cdf6" : "white"}
      borderRadius={5}
      color={props.index === 0 ? "white" : "black"}
      _hover={{
        backgroundColor: "#90cdf4",
      }}
    >
      <Flex direction="column" placeItems="center">
        <Text textTransform="capitalize">{props.weeks}</Text>
        <Image src={image}></Image>
        <Text>
          {props.centi ? Math.floor(props.temps) : Math.floor(fah)}
          {props.centi ? <span>&#x2103; </span> : <span>&#8457;</span>}
        </Text>
      </Flex>
    </Box>
  );
};

export default Weather;
