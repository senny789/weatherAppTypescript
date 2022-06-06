import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import { useEffect, useState } from "react";
interface props {
  location: string;
  time: number;
  temperature: number;
  icons: string;
  weather: string;
  chCity: (city: string) => void;
  // recomendaation: any;
}
const Sidebar: React.FC<props> = (props) => {
  const key = "40f8bbe6bdc2ecaf029ad8f6f08286b1";
  const [pageLoad, chLoad] = useState(true);
  const [date, chDate] = useState(new Date(props.time));
  const [search, chSearch] = useState<Array<object>>([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${props.location}&limit=3&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        chSearch([...data]);
      });
  }, [props.location]);
  console.log(search);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const image = `http://openweathermap.org/img/wn/${props.icons}@2x.png`;
  const recomend = () => {
    return search.map((re: any) => {
      return pageLoad ? (
        ""
      ) : (
        <Text
          onClick={() => {
            props.chCity(re.name);
            chLoad(true);
          }}
          cursor="pointer"
          border="1px solid #718096"
          borderRadius="5px"
          textAlign="center"
          padding="1em"
          _hover={{
            backgroundColor: "blue.200",
          }}
        >
          {re.name} {re.country}
        </Text>
      );
    });
  };
  return (
    <Box padding="1em">
      <InputGroup padding="1em">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          h="full"
          left="1em"
        />
        <Input
          type="text"
          placeholder="Search"
          width="100%"
          backgroundColor="gray.200"
          onChange={(e) => {
            if (pageLoad) {
              chLoad(false);
            }
            if (e.target.value === "") {
              chLoad(true);
            }
            props.chCity(e.target.value);
          }}
        />
      </InputGroup>
      <Box>{recomend()}</Box>
      <Box textAlign="center">
        <Image src={image}></Image>
        <Heading>{Math.floor(props.temperature)}&#8451;</Heading>
        <Flex paddingLeft="5em">
          <Heading>
            {new Date().toLocaleString("en-us", { weekday: "long" })},
          </Heading>
          <Heading color="gray.100" display="inline-block">
            {date.getHours() % 12 > 9
              ? date.getHours() % 12
              : "0" + (date.getHours() % 12)}
            :
            {date.getMinutes() % 12 > 9
              ? date.getMinutes() % 12
              : "0" + (date.getMinutes() % 12)}
          </Heading>
        </Flex>
      </Box>

      <Divider orientation="horizontal" paddingBlock="2em" />
      <Box padding="2em">
        <Flex>
          <Image src={image} height="3rem"></Image>
          <Text textTransform="capitalize">{props.weather}</Text>
        </Flex>
        <Flex>
          <Image src="./assets/sunny.svg" height="3rem"></Image>
          <Text> Rain:30%</Text>
        </Flex>
      </Box>
      <Box border="dashed 3px gray" padding="1em 1em 5em 1em">
        <Flex>
          <Icon
            as={ImLocation2}
            height="2em"
            width="2em"
            color="blue.200"
          ></Icon>
          <Heading fontSize="2xl">
            {props.location === "" ? "kathmandu" : props.location}
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
