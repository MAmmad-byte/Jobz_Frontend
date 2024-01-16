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



const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255)
})
export default function Login() {
  
    const { register, handleSubmit , formState: { errors }} = useForm({
      resolver: zodResolver(userSchema),
    })
    const onSubmit = async(data) => {
      const  {request} = userServices.UserLogin(data)
      request.then((r)=>{
        localStorage.setItem("auth", r.data)
        window.location = 'https://jobz-steel.vercel.app/dashboard'
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
      <ShadowBox style={{ width: "50%" }}>
        <Heading as="h2" size="lg" color="#000">
          Welcome back
        </Heading>
        {resError &&<Text color={"red"}>{resError}</Text>}
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
            <FormInput errors={errors} label="Email address" name="email" placeholder="Enter Email" register={register} type="email" />
            <FormInput errors={errors} label="Password" name="password" placeholder="Enter Password" register={register} type="password" />
            
          <Box textAlign={"center"}>
            <Button type="submit" pl={10} pr={10} mt={5} colorScheme="teal" size="md">
              Login
            </Button>
          </Box>
        </form>
      </ShadowBox>
    </PageLayout></Box>
  );
}
