import { ArrowDownIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  chakra,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      w="100vw"
      p={4}
    >
      <Box mb={4}>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="gray.500"
          textAlign="center"
        >
          We've moved!
        </Heading>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          UCFreeLoaders is now a part of{" "}
          <Link href="https://laundrivr.com" color="blue.400">
            Laundrivr
          </Link>
          , a mobile app on the{" "}
          <Link
            href="https://apps.apple.com/us/app/laundrivr/id6444505198/"
            color="blue.400"
          >
            App Store
          </Link>{" "}
          and{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.laundrivr.laundrivr"
            color="blue.400"
          >
            Google Play
          </Link>
          . Click below to download the app!
        </Text>
      </Box>
      <Flex direction="column" align="center" justify="center" gap={5}>
        <FreeLoadersCard />
        <Flex align="center" justify="center">
          <ArrowDownIcon w={8} h={8} />
        </Flex>
        <LaundrivrCard />
      </Flex>
    </Flex>
  );
}

const FreeLoadersCard = () => {
  return (
    <Card>
      <CardBody>
        <Text
          fontSize={useBreakpointValue({ base: "sm", md: "xl" })}
          fontWeight="bold"
          color="red.400"
          textAlign="center"
          userSelect="none"
        >
          UCFreeLoaders
        </Text>
      </CardBody>
    </Card>
  );
};

const LaundrivrCard = () => {
  return (
    <AnimatedCard>
      <Text
        fontSize={useBreakpointValue({ base: "sm", md: "xl" })}
        fontWeight="bold"
        color="blue.400"
        textAlign="center"
        userSelect="none"
        onClick={() => {
          window.location.href = "https://laundrivr.com";
        }}
      >
        Laundrivr
      </Text>
    </AnimatedCard>
  );
};

type AnimatedCardProps = {
  children: React.ReactNode;
};

const AnimatedCard = ({ children }: AnimatedCardProps) => {
  return (
    <Card as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default App;
