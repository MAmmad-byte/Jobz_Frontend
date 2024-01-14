import { Box } from "@chakra-ui/react";

export default function PageLayout({ children, styles }) {
  return (
    <Box
      {...styles}
      maxWidth="1400px"
      height={"calc(100% - 50px)"}
      m="0 auto"
    //   border="1px solid red"
    >
      {children}
    </Box>
  );
}
