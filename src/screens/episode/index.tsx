import EpisodeCell from 'src/components/EpisodeCell';
import { Loading, SContainer } from 'src/components/style';
import { Episode } from 'src/data/model';

export interface EpisodeUIProps {
  episode?: Episode;
  isLoading?: boolean;
  onGoBack: () => void;
}

export default function EpisodeUI({ episode, isLoading, onGoBack }: EpisodeUIProps) {
  return (
    <SContainer>
      {isLoading ?? !episode ? (
        <Loading />
      ) : (
        <EpisodeCell testID={`cell-${episode.id}`} episode={episode} />
      )}
    </SContainer>
  );
}
