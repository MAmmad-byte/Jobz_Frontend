import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import ShadowBox from "../components/ShadowBox";
import JobCard from "../components/JobCard";
import { useNavigate, useParams } from "react-router-dom";
import job from "../services/job";

export default function JobPreview() {
  const { id } = useParams();
  const [showJob, setShowJob] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    show();
  }, []);

  function handleClick() {
    navigate(`/job/${id}/apply`);
  }

  async function show() {
    try {
      let request = await job.jobPreview(id);
      setShowJob(request.data);
    } catch (error) {
      console.log(error.response.status);
    }
  }
  return (
    <PageLayout>
      <Grid
        pt={20}
        h="90vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem color={"#000"} colSpan={4} pt={10} pb={10}>
          <ShadowBox>
            <JobCard
              title={showJob.title}
              city={showJob.city}
              jobType={showJob.jobType}
              lastDate={showJob.lastDate}
              country={showJob.country}
              styles={{ color: "#000", padding: "20px 0 40px 0" }}
              onClick={handleClick}
            />
            <Heading color="#000" mt={5} fontSize={17}>
              {" "}
              Job description{" "}
            </Heading>
            <Text fontSize={14} color="#000" mt={1} lineHeight={5}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing.
              Variations of passages of lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing.
            </Text>
            <Heading color="#000" mt={5} fontSize={17}>
              Responsibility
            </Heading>
            <Text fontSize={14} color="#000" mt={1} lineHeight={5}>
              The applicants should have experience in the following areas. Have
              sound knowledge of commercial activities. Leadership, analytical,
              and problem-solving abilities. Should have vast knowledge in IAS/
              IFRS, Company Act, Income Tax, VAT.
            </Text>
            <Heading color="#000" mt={5} fontSize={17}>
              Qualifications
            </Heading>
            <Text fontSize={14} color="#000" mt={1} lineHeight={5}>
              The applicants should have experience in the following areas. Have
              sound knowledge of commercial activities. Leadership, analytical,
              and problem-solving abilities. Should have vast knowledge in IAS/
              IFRS, Company Act, Income Tax, VAT.
            </Text>
            <Heading color="#000" mt={5} fontSize={17}>
              Benefits
            </Heading>
            <Text fontSize={14} color="#000" mt={1} lineHeight={5}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing.
            </Text>
          </ShadowBox>
        </GridItem>
        <GridItem pt={10} colSpan={1}>
          <ShadowBox style={{ color: "#000" }}>
            <Text color={"#000"} mt={1} fontSize={25} fontWeight={600}>
              Job Summery
            </Text>
            <Text color={"#000"} mt={3}>
              Published On: {showJob.publishDate}
            </Text>
            <Text color={"#000"} mt={1}>
              Job Type: {showJob.jobType}
            </Text>
            <Text color={"#000"} mt={1}>
              Location: {showJob.city}, {showJob.country}
            </Text>
            <Text color={"#000"} mt={1}>
              Salary: {showJob.salary}
            </Text>
            <Text color={"#000"} mt={1}>
              Vacancy: {showJob.noOfPositions} Positions
            </Text>
          </ShadowBox>
          <Button onClick={handleClick} mt={2} colorScheme="blue" width={"100%"}>
            Apply Now
          </Button>
        </GridItem>
        {/* <GridItem colSpan={2} bg="papayawhip" /> */}
      </Grid>
    </PageLayout>
  );
}
