import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import banner from "../assets/images/banner.png";
import JobCard from "../components/JobCard";
import JobSearchInput from "../components/JobSearchInput";
import { useEffect, useState } from "react";
import BlankCard from "../components/BlankCard";
import job from "../services/job";
import { Link } from "react-router-dom";

export default function Home() {

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetchJob();
  }, []);
  async function fetchJob() {
    const response = await job.JobList();
    let jobs = response.data;
    jobs = jobs.filter((j)=> j.featured === true)
    setJobs(jobs);
  }
  
  function handleClick(job_id) {
    // navigate(`/job/${job_id}/apply`);
  }

  return (
    <Box>
      <Box
        width={"100%"}
        height={"70vh"}
        backgroundImage={banner}
        backgroundRepeat="no-repeat"
        backgroundSize="200%"
        backgroundPosition="top right"
      >
        <PageLayout styles={{ position: "relative" }}>
          <Box
            color={"#fff"}
            position="absolute"
            transform="translate(0,-50%)"
            top={"30%"}
          >
            <Heading as="h3" fontWeight="400" size="lg">
              4636+ Job Listed
            </Heading>
            <Heading mt={1} fontSize={45}>
              Find Your Dream Job
            </Heading>
            <Button
              _hover={{ background: "#68D391" }}
              color="#fff"
              background="#68D391"
              mt={10}
            >
              Check Lastest Jobs
            </Button>
          </Box>
        </PageLayout>
      </Box>
      
      <Box background="#EBF8FF">
        <PageLayout>
          <Box mt={140} pt={20} pb={20}>
            <Heading>Featured Jobs</Heading>
            <Grid
            mt={10}
              // templateRows="repeat(5, 1fr)"
              templateColumns="repeat(1, 1fr)"
              rowGap={3}
            >
              {
               jobs.length >0 ? jobs.map((job)=>(

                  <Link key={job._id} to={`/job/${job._id}`}>
              <JobCard
                title={job.title}
                city={job.city}
                country={job.country}
                jobType={job.jobType}
                lastDate={job.lastDate}
                styles={{ background: "#F7FAFC" }}
                onClick={() => handleClick(job._id)}
                />
            </Link>
                )) : <BlankCard>No Featured Jobs Available Yet.</BlankCard>
              }
            </Grid>
          </Box>
        </PageLayout>
      
      </Box>
      
    </Box>
  );
}
