import { FlatList } from 'react-native';
import LocationCell from 'src/components/LocationCell';
import { Loading, RefreshControl, SContainer } from 'src/components/style';
import { Location } from 'src/data/model';

export interface LocationsUIProps {
  locations: Location[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onFetchMore: () => void;
}

export default function LocationsUI({
  locations,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onFetchMore,
}: LocationsUIProps) {
  const renderItem = ({ item: location }: { item: Location }) => {
    return <LocationCell location={location} />;
  };

  return (
    <SContainer>
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
