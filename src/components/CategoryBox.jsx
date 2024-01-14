import { Badge, Box, Text } from "@chakra-ui/react";

export default function CategoryBox({cardTitle, count, body="Available position"}) {
  return (
    <Box p={10}>
      <Text fontWeight={500} fontSize={22}>
        {cardTitle}
      </Text>
      <Box mt={2} display="flex" alignItems="center">
        <Badge p="5px 15px" variant="solid" fontSize={15} colorScheme="blue">
          {count}
        </Badge>
        <Text fontSize={20} ml={5}>
          {body}
        </Text>
      </Box>
    </Box>
  );
}
