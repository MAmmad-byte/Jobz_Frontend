import { Box, Grid, GridItem } from "@chakra-ui/react";
import JobSearchInput from "../components/JobSearchInput";
import PageLayout from "../components/PageLayout";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import job from "../services/job";
import { Link, useNavigate } from "react-router-dom";

export default function Jobs() {


  const [jobList, setJobList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    fetchJob();
  }, []);
  async function fetchJob() {
    const response = await job.JobList();
    setJobList(response.data);
  }
  
  function handleClick(job_id) {
    // navigate(`/job/${job_id}/apply`);
  }

  async function handleChange(data) {
    if (data.length > 0) {
      const response = await job.JobSearch(data);
      setSearchList(response.data);
    } else {
      const response = await job.JobList();
      setJobList(response.data);
    }
  }

  async function handleSubmit(data) {
    const response = await job.JobFindResult(data.search);
    setJobList(response.data);
  }


  return (
    <PageLayout styles={{ minHeight: "100vh", width: "100%" }}>
      <Box pt={20}>
        <JobSearchInput
          handleSearchSubmit={handleSubmit}
          handleChange={handleChange}
          searchList={searchList}
        />
      </Box>
      <Grid
        p={10}
        // templateRows="repeat(5, 1fr)"
        templateColumns="repeat(1, 1fr)"
        rowGap={3}
      >
        {jobList.map((job) => (
          <GridItem key={job._id}>
            <Link to={`/job/${job._id}`}>
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
          </GridItem>
        ))}
      </Grid>
    </PageLayout>
  );
}
