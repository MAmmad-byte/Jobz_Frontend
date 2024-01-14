import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { Box, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import userServices from "../services/userServices";
import UserCard from "../components/UserCard";
import AdminUserJobCard from "../components/AdminUserJobCard";
import jobApplication from "../services/jobApplication";
import { useParams } from "react-router-dom";
import BlankCard from "../components/BlankCard";

export default function UserAppliedJobs() {
  const { id } = useParams();
  const [jobList, setJobList] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser()
    fetchUserAppliedJobs();
  }, []);

  async function fetchUserAppliedJobs() {
    const response = await jobApplication.fetchUserAppliedJobs(id);
    console.log(response.data);
    setJobList(response.data);
  }
  async function fetchUser() {
    const response = await userServices.fetchUser(id);
    setUser(response.data);
  }

  return (
    <PageLayout
      styles={{ minHeight: "100vh", width: "100%", paddingTop: "20px" }}
    >
      <UserCard
        fullName={user.firstName+" "+ user.lastName}
        styles={{ background: "#F7FAFC" }}
        address={user.address}
        email={user.email}
        phone={user.phone}
      />

      <Text p={15} fontSize={40}>
        Applied Jobs
      </Text>
      <Grid pt={5} pb={10} templateColumns="repeat(1, 1fr)" rowGap={3}>
        {jobList.length > 0 ? (
          jobList.map((job) => (
            <AdminUserJobCard
              title={job.jobId.title}
              coverLetter={job.coverLetter}
              appliedDate={job.appliedDate}
              lastDate={job.jobId.lastDate}
              key={job._id}
              styles={{ background: "#F7FAFC" }}
            />
          ))
        ) : (
          <BlankCard styles={{ background: "#F7FAFC" }}>
            No Applied Jobs Found.
          </BlankCard>
        )}
      </Grid>
    </PageLayout>
  );
}
