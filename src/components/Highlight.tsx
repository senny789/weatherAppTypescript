import {
  Box,
  Grid,
  Text,
  Image,
  Flex,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
interface prop {
  sunrise: number;
  sunset: number;
  temp: any;
  weather: any;
  humidity: number;
  wind_speed: number;
  visibility: number;
  location: string;
}
const Highlight: React.FC<prop> = (props) => {
  console.log(props);
  return (
    <Grid
      templateColumns="repeat(3,1fr)"
      templateRows="1fr 1fr"
      padding="2em"
      gap="2em 2em"
    >
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>sunrise and sunset</Text>
        <Box>
          <Flex direction="column" height="50%">
            <Box>
              <Flex>
                <Image
                  height={10}
                  width={10}
                  src="./assets/sunrise.svg"
                ></Image>
                <Box>
                  <Text>6:30am</Text>
                  <Text>-1m 36s</Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Image height={10} width={10} src="./assets/sunset.svg"></Image>
                <Box>
                  <Text>6:30pm</Text>
                  <Text>-1m 36s</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Temperature</Text>
        <Flex gap={3}>
          <Box>
            <Heading as="span">{props?.temp?.day}&#176;</Heading>
            <Text as="span">C</Text>

            <Flex paddingTop="2em">
              <Icon
                as={ImLocation2}
                height="2em"
                width="2em"
                color="purple.100"
              ></Icon>
              <Heading fontSize="xl">{props?.location}</Heading>
            </Flex>
          </Box>
          <Slider
            aria-label="slider-ex-1"
            minH="32"
            defaultValue={props?.temp?.day}
            colorScheme="green"
            orientation="vertical"
            isDisabled
          >
            <SliderTrack w="1em">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Wind Status</Text>
        <Flex gap={4}>
          <Box>
            <Heading as="span">{props?.wind_speed}</Heading>
            <Text as="span">km/h</Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Humidity</Text>
        <Flex gap={4}>
          <Box>
            <Heading as="span">{props?.humidity}</Heading>
            <Flex>
              <Text>Status:</Text>
              <Text color="blue.300">Good Quality</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Visibility</Text>
        <Flex gap={4}>
          <Box>
            <Heading as="span">{props?.visibility}</Heading>
            <Flex>
              <Text>Status:</Text>
              <Text color="orange.300">Average</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Air Quality</Text>
        <Flex gap={4}>
          <Box>
            <Flex alignContent="baseline">
              <Heading>120</Heading>
            </Flex>
            <Flex>
              <Text>Status:</Text>
              <Text color="red.300">Bad Quality</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Highlight;
