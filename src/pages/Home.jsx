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
import FormInput from "../components/forms/FormInput";
import CategoryBox from "../components/CategoryBox";
import JobCard from "../components/JobCard";
import JobSearchInput from "../components/JobSearchInput";

export default function Home() {
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
      <PageLayout>
        <Box mt={20}>
          <JobSearchInput />
        </Box>
      </PageLayout>
      <Box background="#EBF8FF">
        <PageLayout>
          <Box mt={140} pt={20} pb={20}>
            <Heading>Featured Jobs</Heading>
            <Grid
            mt={10}
              templateRows="repeat(5, 1fr)"
              templateColumns="repeat(1, 1fr)"
              rowGap={3}
            >
              <GridItem>
                <JobCard />
              </GridItem>
              <GridItem>
                <JobCard />
              </GridItem>
              <GridItem>
                <JobCard />
              </GridItem>
              <GridItem>
                <JobCard />
              </GridItem>
              <GridItem>
                <JobCard />
              </GridItem>
            </Grid>
          </Box>
        </PageLayout>
      
      </Box>
      
    </Box>
  );
}
