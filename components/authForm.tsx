import {Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr"; //handles caching and optimistic update
import { auth } from "../lib/mutations";