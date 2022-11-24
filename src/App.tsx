import * as React from "react";
import "./app.css";
import { Box, Grid } from "@chakra-ui/react";
import { SideBar } from "./schema/schema";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
interface latlong {
  lat: number;
  long: number;
}
interface weekdata {
  sunrise: number;
  sunset: number;
  temp: any;
  weather: any;
  humidity: number;
  wind_speed: number;
  visibility: number;
  location: string;
}

export default function App() {
  const key = "40f8bbe6bdc2ecaf029ad8f6f08286b1";

  const [city, chCity] = useState<string>("kathmandu");
  const [latLong, chLatLong] = useState<latlong>({
    lat: 27.7083,
    long: 85.3206,
  });
  const [data, changeData] = useState<SideBar>({
    location: "",
    time: 0,
    temperature: 0,
    icons: "",
    weather: "",
    // recomendaation: [{}],
  });
  const [weekData, chWeekData] = useState<Array<weekdata>>([]);

  const dataGet = async () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        chLatLong({
          lat: data[0].lat,
          long: data[0].lon,
        });
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latLong.lat}&lon=${latLong.long}&units=metric&exclude=minutely,hourly,alerts&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        changeData({
          location: city,
          time: data.timezone_offset,
          temperature: data.current.temp,
          icons: data.current.weather[0].icon,
          weather: data.current.weather[0].description,
          // recomendaation: [...search],
        });
        console.log(data);
        const weekly = data.daily.map((day: any) => {
          return {
            sunrise: day.sunrise,
            sunset: day.sunset,
            temp: day.temp,
            weather: day.weather,
            humidity: day.humidity,
            wind_speed: day.wind_speed,
            visibility: data.current.visibility,
            location: city,
          };
        });
        chWeekData(weekly);
      });
  };
  useEffect((): void => {
    dataGet();
  }, [city]);

  return (
    <Box width="100%">
      <Grid templateColumns="25% 75%">
        <Sidebar {...data} chCity={chCity} />
        <Main {...weekData} />
      </Grid>
    </Box>
  );
}
