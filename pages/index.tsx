import { Box } from "@mui/system";
import type { NextPage } from "next";
import Header from "../components/common/Header";
import Map from "../components/Map";
import { useState } from "react";
import MapDrawer from "../components/MapDrawer";

const drawerWidth = 300;

const Home: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      <Box display="flex">
        <Box flexShrink={0}>
          <MapDrawer
            drawerWidth={drawerWidth}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </Box>
        <Box flexGrow={1} sx={{ height: "100vh", width: "100vw" }}>
          <Map />
        </Box>
      </Box>
    </>
  );
};

export default Home;
