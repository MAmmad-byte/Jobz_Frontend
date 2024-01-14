import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import { getUserInfo } from "../services/authServices";
import { jwtDecode } from "jwt-decode";
import JobCard from "../components/JobCard";
import BlankCard from "../components/BlankCard";
import jobApplication from "../services/jobApplication";

export default function UserDashboard() {
  const [appliedList, setAppliedList] = useState([]);

  useEffect(() => {
    let j = localStorage.getItem("auth");
    let user = jwtDecode(j);
    setData(user.firstName);
    fetchAppliedJobs();
  }, []);

  async function fetchAppliedJobs() {
    const response = await jobApplication.fetchAppliedJobs();
    setAppliedList([...response.data]);
    console.log(response.data);
    console.log(appliedList);

  }

  const [data, setData] = useState("");

  return (
    <PageLayout styles={{ minHeight: "100vh", width: "100%" }}>
      <Box pt={10} width={"100%"}>
        <Heading fontSize={25} fontWeight={600} color={"#2F855A"}>
          Welcome back: {data}
        </Heading>
        <Text fontSize={20} fontWeight={600} mt={10}>
          Applied Jobs
        </Text>
        <Grid pt={10} pb={10} templateColumns="repeat(1, 1fr)" rowGap={3}>
          {appliedList.length > 0 ? (
            appliedList.map(({jobId:card}) => (
              <GridItem key={card._id}>
                {/* <Link to={`/job/${job._id}`}> */}
                <JobCard
                  title={card.title}
                  city={card.city}
                  country={card.country}
                  lastDate={card.lastDate}
                  jobType={card.jobType}
                  
                  styles={{ background: "#F7FAFC" }}
                />
                {/* </Link> */}
              </GridItem>
            ))
          ) : (
            <BlankCard styles={{ background: "#F7FAFC" }}>
              <Text>No Applied Jobs Available.</Text>
            </BlankCard>
          )}
        </Grid>
      </Box>
    </PageLayout>
  );
}
