import React from 'react';
import { FlatList } from 'react-native';
import Card from 'src/components/Card';
import Header from 'src/components/Header';
import Picker from 'src/components/Picker';
import {
  Loading,
  RefreshControl,
  SContainer,
  SHTitle,
  SHeader,
  SRow,
  Text,
  TextInput,
} from 'src/components/style';
import { t } from 'src/config/i18n';
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

  return (
    <SContainer>
      <Header name={t('characters')} />
      <FlatList
        data={characters}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListHeaderComponent={
          <>
            <SHTitle>
              <Text ttype="title">{t('filterBy')}</Text>
            </SHTitle>
            <SHeader>
              <SRow>
                <TextInput
                  testID="text-input-name"
                  placeholder="name"
                  value={name}
                  sizeLimit
                  placeholderTextColor="gray"
                  onChangeText={onSearchName}
                />
                <TextInput
                  testID="text-input-type"
                  placeholder="type"
                  value={type}
                  placeholderTextColor="gray"
                  sizeLimit
                  onChangeText={onSearchType}
                />
                <TextInput
                  testID="text-input-species"
                  placeholder="species"
                  value={species}
                  sizeLimit
                  placeholderTextColor="gray"
                  onChangeText={onSearchSpecie}
                />
              </SRow>

              <Picker
                testID="picker-status"
                options={['alive', 'dead', 'unknown']}
                onChange={onSearchStatus}
              />
              <Picker
                testID="picker-gender"
                options={['male', 'female', 'genderless', 'unknown']}
                onChange={onSearchGender}
              />
            </SHeader>
          </>
        }
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(character: Character) => `c_${character.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </SContainer>
  );
}
