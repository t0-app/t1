import { FlatList } from 'react-native';
import Header from 'src/components/Header';
import LocationCell from 'src/components/LocationCell';
import { Loading, RefreshControl, SContainer } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Location } from 'src/data/model';

export interface LocationsUIProps {
  locations: Location[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedLocation: (locationId: number) => void;
  onFetchMore: () => void;
}

export default function LocationsUI({
  locations,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedLocation,
  onFetchMore,
}: LocationsUIProps) {
  const renderItem = ({ item: location }: { item: Location }) => {
    return (
      <LocationCell
        testID={`cell-${location.id}`}
        location={location}
        onPress={() => onSelectedLocation(location.id)}
      />
    );
  };

  return (
    <SContainer>
      <Header name={t('locations')} />
      <FlatList
        data={locations}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(location: Location) => `c_${location.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </SContainer>
  );
}
