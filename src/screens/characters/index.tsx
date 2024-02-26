import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Card from 'src/components/Card';
import Picker from 'src/components/Picker';
import { Loading, RefreshControl, SContainer, SHeader, TextInput } from 'src/components/style';
import { Character } from 'src/data/model';

export interface CharactersUIProps {
  name?: string;
  type?: string;
  species?: string;
  gender?: string;
  status?: string;
  characters: Character[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedCharacter: (characterId: number) => void;
  onFetchMore: () => void;
  onSearchName: (name: string) => void;
  onSearchType: (name: string) => void;
  onSearchSpecie: (name: string) => void;
  onSearchGender: (name: string) => void;
  onSearchStatus: (name: string) => void;
}

export default function CharactersUI({
  name,
  type,
  species,
  gender,
  status,
  characters,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedCharacter,
  onFetchMore,
  onSearchName,
  onSearchType,
  onSearchSpecie,
  onSearchGender,
  onSearchStatus,
}: CharactersUIProps) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return (
      <Card
        testID={`card-${character.id}`}
        character={character}
        onPress={() => onSelectedCharacter(character.id)}
      />
    );
  };
  const headerList = () => {
    return null;
  };
  return (
    <SContainer>
      <SHeader>
        <TextInput
          testID="text-input-name"
          placeholder="name"
          value={name}
          border={true}
          sizeLimit={true}
          onChangeText={onSearchName}
        />
        <TextInput
          testID="text-input-type"
          placeholder="type"
          value={type}
          border={true}
          sizeLimit={true}
          onChangeText={onSearchType}
        />
        <TextInput
          testID="text-input-species"
          placeholder="species"
          value={species}
          border={true}
          sizeLimit={true}
          onChangeText={onSearchSpecie}
        />
        <TextInput
          testID="text-input-gender"
          placeholder="gender"
          value={gender}
          border={true}
          sizeLimit={true}
          onChangeText={onSearchGender}
        />
        <TextInput
          testID="text-input-status"
          placeholder="status"
          value={status}
          border={true}
          sizeLimit={true}
          onChangeText={onSearchStatus}
        />
      </SHeader>
      <FlatList
        data={characters}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListFooterComponent={isFetching ? <Loading /> : null}
        //ListHeaderComponent={headerList}
        keyExtractor={(character: Character) => `c_${character.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </SContainer>
  );
}
