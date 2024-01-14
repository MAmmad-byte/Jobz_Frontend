import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function JobSearchInput({
  handleChange,
  handleClick,
  searchList,
  handleSearchSubmit,
}) {



  const [show, setShow] = useState(false);
  const { handleSubmit, register } = useForm({});


  
  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)}>
      <Flex alignItems="center" justifyContent="center">
        <Box width={"30%"} position="relative">
          <Input
            name="search"
            color="#000"
            placeholder="Type here to search job..."
            {...register("search", {
              onChange: (e) => handleChange(e.target.value),
            })}
            // onChange={handleChange}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
          />
          <Box
            hidden={!show}
            top={14}
            position="absolute"
            backgroundColor="#fff"
            boxShadow="xs"
            width="100%"
            borderRadius={5}
            overflow="hidden"
          >
            {searchList ? (
              searchList.map((item) => (
                <Text key={item} borderBottom={"1px solid #e2e8f0"} p={2}>
                  {item}
                </Text>
              ))
            ) : (
              <Text borderBottom={"1px solid #e2e8f0"} p={2}>
                No Result Found
              </Text>
            )}
          </Box>
        </Box>
        <Button
          _hover={{ background: "#68D391" }}
          color="#fff"
          background="#68D391"
          ml={5}
          type="submit"
        >
          Find
        </Button>
      </Flex>
    </form>
  );
}
