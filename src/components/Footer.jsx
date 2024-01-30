import React from "react";
import PageLayout from "./PageLayout";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Box
      alignSelf={"flex-end"}
      width={"100%"}
      padding="10px 0"
      background="teal"
      color="#fff"
    >
      <PageLayout>
        <Text textAlign="center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-ammad-a8b7a8267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            Created by: Muhammad Ammad
          </a>
        </Text>
      </PageLayout>
    </Box>
  );
}
