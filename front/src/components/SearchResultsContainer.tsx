import React from 'react';
import { Box, Heading, Flex, Spinner, Stack, Text } from '@chakra-ui/core';
import SearchResult from './SearchResult';

interface Props {
  isInputDirty: boolean;
  isLoading: boolean;
  shows: any[];
}

const LoadingSpinner = () => (
  <Flex justifyContent="center">
    <Spinner />
  </Flex>
);

const EmptyListMessage = () => (
  <Flex justifyContent="center">
    <Text>There are no shows to display</Text>
  </Flex>
);

const WelcomeMessage = () => (
  <Flex justifyContent="center">
    <Text>Welcome, search for a show</Text>
  </Flex>
);

const SearchResults = ({ shows }: { shows: Props['shows'] }) => (
  <Stack minW="lg" spacing={4}>
    {shows.map((show) => (
      <SearchResult key={show.id} show={show} />
    ))}
  </Stack>
);

const SearchResultsContainer = ({ isInputDirty, isLoading, shows }: Props) =>
  isLoading ? (
    <LoadingSpinner />
  ) : shows?.length ? (
    <SearchResults shows={shows} />
  ) : isInputDirty ? (
    <EmptyListMessage />
  ) : (
    <WelcomeMessage />
  );

export default SearchResultsContainer;