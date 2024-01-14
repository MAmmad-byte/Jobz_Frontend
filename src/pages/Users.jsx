import React, { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'
import { Box, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import JobCard from '../components/JobCard'
import userServices from '../services/userServices'
import UserCard from '../components/UserCard'
import { useNavigate } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])
    
    async function fetchUser(){
        const response = await userServices.fetchUsers();
        setUsers(response.data)
    }
    async function handleChange(e){
        let value = e.currentTarget.value;
        if(value.length>0){
            const response = await userServices.searchUsers(value)
            setUsers(response.data)
        }else{
            const response = await userServices.fetchUsers();
        setUsers(response.data)
        }
    }

    function handleClick (id){
        navigate(`/admin/allUsers/${id}/applied`)
    }
  return (
    <PageLayout styles={{ minHeight: "100vh", width: "100%" }}>
        <Flex pt={10} justifyContent={"space-between"} alignItems={"center"}>
        <Text p={15} fontSize={40}>All Registered Users</Text>
        <Input onChange={handleChange} name='searchUser' type='text' width={"400px"} placeholder='Search User...' />
        </Flex>
      <Grid
        pt={5}
        pb={10}
        templateColumns="repeat(1, 1fr)"
        rowGap={3}
      >
        {
        users.map((user) => (
          <GridItem key={user._id}>
            {/* <Link to={`/job/${job._id}`}> */}
              <UserCard
                fullName={user.firstName+" " + user.lastName }
                email={user.email}
                phone={user.phone}
                address={user.address}
                dob={user.dob}
                styles={{ background: "#F7FAFC" }}
                onClick={() => handleClick(user._id)}
              />
            {/* </Link> */}
          </GridItem>
        ))}
      </Grid>
    </PageLayout>
  )
}
