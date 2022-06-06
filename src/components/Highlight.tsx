import { Box, Grid, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
const Highlight = () => {
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
                  <Text>6:30am</Text>
                  <Text>-1m 36s</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Temperature</Text>
        <Flex>
          <Box>
            <Heading as="span">20&#176;</Heading>
            <Text as="span">c</Text>

            <Flex paddingTop="2em">
              <Icon
                as={ImLocation2}
                height="2em"
                width="2em"
                color="purple.100"
              ></Icon>
              <Heading fontSize="xl">Kathmandu,Nepal</Heading>
            </Flex>
          </Box>
          <Image src="./assets/temprature.svg" h={20} w={20}></Image>
        </Flex>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Wind Status</Text>

        <Heading as="span">8.72</Heading>
        <Text as="span">km/h</Text>

        <Text>Status:</Text>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Humidity</Text>
        <Flex>
          <Box>
            <Heading as="span">12</Heading>
            <Text as="span">%</Text>

            <Flex>
              <Text>Status:</Text>
              <Text color="blue.300">Good Quality</Text>
            </Flex>
          </Box>
          <Image src="./assets/temprature.svg" h={20} w={10}></Image>
        </Flex>
      </Box>

      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Visibility</Text>
        <Flex>
          <Box>
            <Heading as="span">9.43</Heading>
            <Text as="span">km/h</Text>

            <Flex>
              <Text>Status:</Text>
              <Text color="orange.300">Average</Text>
            </Flex>
          </Box>
          <Image src="./assets/temprature.svg" h={20} w={10}></Image>
        </Flex>
      </Box>
      <Box padding={4} h="20vh" w="100%" backgroundColor="white">
        <Text>Air Quality</Text>
        <Flex>
          <Box>
            <Flex alignContent="baseline">
              <Heading>120</Heading>
            </Flex>
            <Flex>
              <Text>Status:</Text>
              <Text color="red.300">Bad Quality</Text>
            </Flex>
          </Box>
          <Image src="./assets/temprature.svg" h={20} w={10}></Image>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Highlight;
