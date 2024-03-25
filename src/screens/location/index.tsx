import { FlatList } from 'react-native';
import Card from 'src/components/Card';
import LocationCell from 'src/components/LocationCell';
import { Loading, RefreshControl, SContainer, SHTitle, Text } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Character, Location } from 'src/data/model';

export interface LocationUIProps {
  location?: Location;
  residents?: Character[];
  isLoading?: boolean;
  isLoadingResidents?: boolean;
  isFetching?: boolean;
  isFetchingResidents?: boolean;
  onGoBack: () => void;
  onRefresh: () => void;
}

export default function LocationUI({
  location,
  residents,
  isLoading = false,
  isLoadingResidents = false,
  isFetchingResidents = false,
  onRefresh,
}: LocationUIProps) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return <Card testID={`card-${character.id}`} character={character} />;
  };

  const headerItem = () => {
    return (
      <SHTitle>
        <Text ttype="title">{t('residents')}</Text>
      </SHTitle>
    );
  };

  return (
    <SContainer>
      {isLoading ?? !location ? (
        <Loading />
      ) : (
        <>
          <LocationCell location={location} testID={`cell-${location.id}`} />
          <FlatList
            data={residents}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={isLoadingResidents} onRefresh={onRefresh} />
            }
            ListFooterComponent={isFetchingResidents ? <Loading /> : null}
            ListHeaderComponent={headerItem}
            keyExtractor={(character: Character) => `c_${character.id}`}
          />
        </>
      )}
    </SContainer>
  );
}
