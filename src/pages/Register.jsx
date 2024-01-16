import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../components/forms/FormInput";
import { useState } from "react";
import userServices from "../services/userServices";
import { loginWithJwt } from "../services/authServices";



const userSchema = z.object({
    firstName: z.string().min(3).max(55),
    lastName: z.string().min(3).max(55),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
    address: z.string().min(5).max(255),
    phone: z.string().min(5).max(15),
    dob: z.string(new Date("yyyy-mm-dd")),
})
.superRefine(({password, confirmPassword}, ctx)=>{
  if(password!==confirmPassword){
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message:"Password does not match",
      path:["confirmPassword"]
    })
  }
})
export default function Register() {
  
    const { register, handleSubmit , formState: { errors }} = useForm({
      resolver: zodResolver(userSchema),
    })
    const onSubmit = async(data) => {
      const  {request} = userServices.createUser(data)
      request.then((r)=>{
        localStorage.setItem("auth", r.data)
        console.log(r.data)
        window.location = 'dashboard'
      }).catch((e)=>setResError(e.response.data))
    }
    const [resError, setResError] =useState("")
    
  return (
    <Box height={"calc(100vh - 94px)"}>

    <PageLayout
      styles={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <ShadowBox style={{ width: "50%" }} >
        <Heading as="h2" size="lg" color="#000">
          Create An Account
        </Heading>
        {resError &&<Text color={"red"}>{resError}</Text>}
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
          <Flex>
            <FormInput errors={errors} label="First Name" name="firstName" placeholder="Enter First Name" register={register} type="text" />
            <Divider orientation="vertical" margin="0 20px" />
            <FormInput errors={errors} label="Last Name" name="lastName" placeholder="Enter Last Name" register={register} type="text" />
          </Flex>
            <FormInput errors={errors} label="Email address" name="email" placeholder="Enter Email" register={register} type="email" />
            <FormInput errors={errors} label="Address" name="address" placeholder="Enter Address" register={register} type="text" />
          <Flex>
            <FormInput errors={errors} label="Phone" name="phone" placeholder="Enter Phone" register={register} type="text" />
            <Divider orientation="vertical" margin="0 20px" />
            <FormInput errors={errors} label="Date of Birth" name="dob" placeholder="Select Date and Time" register={register} type="date" />
          </Flex>
            <FormInput errors={errors} label="Password" name="password" placeholder="Enter Password" register={register} type="password" />
            <FormInput errors={errors} label="Re-Type Password" name="confirmPassword" placeholder="Enter Password Again" register={register} type="password" />
          <Box textAlign={"center"}>
            <Button type="submit" pl={10} pr={10} mt={5} colorScheme="teal" size="md">
              Register
            </Button>
          </Box>
        </form>
      </ShadowBox>
    </PageLayout>
      </Box>
  );
}
