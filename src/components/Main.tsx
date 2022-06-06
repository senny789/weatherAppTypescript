import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Flex,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Weather from "./Weather";
import Highlight from "./Highlight";
import { useState } from "react";

interface weekdata {
  sunrise: number;
  sunset: number;
  temp: any;
  weather: any;
  humidity: number;
  wind_speed: number;
}
const Main: React.FC<Array<weekdata>> = (props) => {
  let weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const date = new Date().getDay();
  const [centi, chCenti] = useState(true);
  let i = date;
  const weatherRender = () => {
    return weeks.map((week: string, index) => {
      if (i > 6) {
        i = 0;
      }
      const prop = {
        weeks: weeks[i],
        temps: props[i]?.temp.day,
        icon: props[i]?.weather[0].icon,
        index: index,
        centi: centi,
      };
      i++;
      return <Weather {...prop} />;
    });
  };

  return (
    <Box backgroundColor="gray.50">
      {/*  */}
      <Box padding="2em 1em">
        <Flex justifyContent="space-between">
          <Box>
            <HStack spacing={5}>
              <Text
                _hover={{
                  color: "#90cdf4",
                }}
              >
                Today
              </Text>
              <Text color="#90cdf4">Week</Text>
            </HStack>
          </Box>
          <Box>
            <Flex>
              <HStack spacing={5}>
                <Text
                  height="1.75em"
                  width="1.75em"
                  borderRadius="100%"
                  backgroundColor="#90cdf4"
                  textAlign="center"
                  paddingTop="0.1em"
                  color="white"
                  onClick={() => chCenti(true)}
                >
                  &#8451;
                </Text>
                <Text
                  height="1.75em"
                  width="1.75em"
                  borderRadius="100%"
                  backgroundColor="gray.300"
                  textAlign="center"
                  color="black.50"
                  cursor="pointer"
                  paddingTop="0.1em"
                  _hover={{
                    backgroundColor: "#90cdf4",

                    color: "white",
                  }}
                  onClick={() => chCenti(false)}
                >
                  &#8457;
                </Text>

                <Box backgroundColor="white" width="xs">
                  <Flex justifyContent="space-between" placeItems="center">
                    <Box>
                      <Flex>
                        <HStack>
                          <Avatar width="2em" height="2em"></Avatar>
                          <Text>Diagonal Tech</Text>
                        </HStack>
                      </Flex>
                    </Box>
                    <ChevronDownIcon></ChevronDownIcon>
                  </Flex>
                </Box>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* weather  */}
      <Box>
        <Grid columnGap={4} gridTemplateColumns="repeat(7,1fr)" padding="1em">
          {weatherRender()}
        </Grid>
        <Box>
          <Text>Today Highlight</Text>
        </Box>
        <Highlight />
      </Box>
    </Box>
  );
};

export default Main;
