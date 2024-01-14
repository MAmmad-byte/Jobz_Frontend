import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
} from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import { useForm } from "react-hook-form";
import FormInput from "../components/forms/FormInput";
import FormSelect from "../components/forms/FormSelect";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormNumberInput from "../components/forms/FormNumberInput";
import job from "../services/job";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { checkIsEmployee } from "../services/authServices";
import { useEffect } from "react";

const jopTypeOptions = [
  { value: "part-Time", label: "Part Time" },
  { value: "full-Time", label: "Full Time" },
];
const jopLocation = [
  { value: "on-site", label: "On Site" },
  { value: "remote", label: "Remote" },
];

const schema = z.object({
  title: z.string().min(5, {message:"Title must be atleast 5 charactes."}).max(55),
  jobType: z.string().min(5, {message:"Job-Type must be selected"}).max(55),
  location: z.string().min(5, {message:"Location must be selected"}).max(55),
  city: z.string().min(5, {message:"City is required."}).max(55),
  country: z.string().min(5, {message:"Country is required."}).max(55),
  noOfPositions: z
    .number({ invalid_type_error: "Atleast 1 position is required." })
    .min(1, {message: "Atleast 1 position is required."})
    .max(5000),
  address: z.string().min(5, {message:"Address is required."}).max(255),
  salary: z.string().min(1, {message:"Salary is required."}).max(55),
  description: z.string().min(50, {message:"Description is required or must be atleast 50 characters."}).max(800),
  featured: z.boolean().optional(),
  deadline: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "A valid deadline date is required.",
    })
    .transform((date) => new Date(date)),
});

export default function CreateJob() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!checkIsEmployee())
      return navigate("/")
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues:{
    title: "",
    jobType: "",
    location: "",
    city: "",
    country: "",
    noOfPositions: 0,
    address: "",
    salary: "",
    description: "",
    featured: false,
    deadline: ""
  } });
  const onJobSubmit = async (value) => {
    const response = await job.jobPost(value)
    if(response.status == 200)
      return navigate(`/job/${response.data._id}`)
  };
  return (
    <PageLayout styles={{ padding: "20px 0", width: "100%" }}>
      <ShadowBox style={{ width: "100%" }}>
        <Heading color={"#000"} fontWeight={600} fontSize={35}>
          Create Job
        </Heading>
        <Box>
          <form onSubmit={handleSubmit(onJobSubmit)} action="">
            <Flex>
              <FormSelect
                options={jopTypeOptions}
                errors={errors}
                label={"Job-Type"}
                name={"jobType"}
                placeholder={"Select Type"}
                type={"text"}
                register={register}
              />
              <Divider orientation="vertical" margin="0 20px" />
              <FormSelect
                options={jopLocation}
                errors={errors}
                label={"Location"}
                name={"location"}
                placeholder={"Select Location"}
                type={"text"}
                register={register}
              />
            </Flex>

            <Flex>
              <FormInput
                name="city"
                type="text"
                register={register}
                placeholder="City"
                errors={errors}
                label="City"
              />
              <Divider orientation="vertical" margin="0 20px" />
              <FormInput
                errors={errors}
                label={"Country"}
                name={"country"}
                placeholder={"Select Country"}
                type={"text"}
                register={register}
              />
              <Divider orientation="vertical" margin="0 20px" />
              <FormNumberInput
                name="noOfPositions"
                type="number"
                register={register}
                placeholder="No Of Positions"
                errors={errors}
                label="Open Vacancies"
              />
            </Flex>
            <Flex>
              <FormInput
                name="salary"
                type="text"
                register={register}
                placeholder="Enter Salary"
                errors={errors}
                label="Salary"
              />
              <Divider orientation="vertical" margin="0 20px" />
              <FormInput
                name="deadline"
                type="date"
                register={register}
                placeholder="Select Deadline"
                errors={errors}
                label="Last Date"
              />
            </Flex>
            <FormInput
              name="address"
              type="text"
              register={register}
              placeholder="Enter Office Address"
              errors={errors}
              label="Address"
            />
            <FormInput
              name="title"
              type="text"
              register={register}
              placeholder="Enter Job Title"
              errors={errors}
              label="Title"
            />
            <FormInput
              name="description"
              type="text"
              register={register}
              placeholder="Enter Job Description"
              errors={errors}
              label="Description"
            />
            <FormControl
              p={5}
              display="flex"
              color={"#4FD1C5"}
              alignItems="center"
              justifyContent={"flex-end"}
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                Feautued this job?
              </FormLabel>
              <Switch {...register("featured")} id="email-alerts" />
            </FormControl>
            <Button type="submit">Publish</Button>
          </form>
        </Box>
      </ShadowBox>
    </PageLayout>
  );
}
