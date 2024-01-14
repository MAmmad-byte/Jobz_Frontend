import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import jobApplication from "../services/jobApplication";
import axios from "axios";
import { checkUser } from "../services/authServices";
import TextEditor from "../components/TextEditor";




const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/pdf",
];

const userSchema = z.object({
  cv: z
  .any()
  .refine((file) => file[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
    "Only .jpg, .jpeg, .png and .pdf formats are supported."
    ),
    coverLetter: z.string().min(50, {message:"Cover-Letter is required or must be atleast 50 characters."}).max(500)
  });
  export default function JobForm() {
  const navigate = useNavigate();

  useEffect(() => {
    if(checkUser())
      return navigate("/login")
  }, [])


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const { id } = useParams();
  
  const onSubmit = async (data) => {
    console.log(data)
    const formdata = new FormData();
    formdata.append('cv', data.cv[0])
    formdata.append('job_id', id)
    formdata.append('coverLetter', data.coverLetter)

      try {
        
        const response = await jobApplication.applicationPost(formdata)
        if(response.status==200)
        navigate(`/admin/user/${response.data.candidateId}/job/${response.data.jobId}`)
      } catch (error) {
        setResError(error.response.data)
      }
      
  }
 
  const [resError, setResError] = useState("");
  return (
    <Box minHeight={"calc(100vh - 94px)"}>
      <PageLayout
        styles={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <ShadowBox style={{ width: "70%" }}>
          <Heading as="h2" size="lg" color="#000">
            Job Application
          </Heading>
          {resError && <Text color={"red"}>{resError}</Text>}
          <form onSubmit={handleSubmit(onSubmit)}  action="" method="post" encType="multipart/form-data">
            <FormControl mt={10}>
              <FormLabel color={"#000"}>Upload CV</FormLabel>
              <Input
              name="cv"
                p={1}
                color={"#000"}
                m={0}
                type="file"
                placeholder="name"
                {...register("cv")}
              />
              {errors['cv'] &&<Text color={"red"}>{errors['cv'].message}</Text>}
            </FormControl>
            {/* <Textarea
            name="coverLetter"
              color={"#000"}
              mt={5}
              placeholder="Write Cover Letter"
              size="lg"
              {...register("coverLetter")}
            /> */}

            <TextEditor onChange={(e)=>setValue("coverLetter", e)}  placeholder="Write Your CoverLetter" />
            {errors['coverLetter'] && <Text color={"red"}>{errors['coverLetter'].message}</Text>}

            <Box textAlign={"center"}>
              <Button
                type="submit"
                pl={10}
                pr={10}
                mt={5}
                colorScheme="teal"
                size="md"
              >
                Submit
              </Button>
            </Box>
          </form>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
