import React from 'react';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
`;

export type StoryListProps<T> = { items: T[]; Component: React.ComponentType<T> };

export function StoryList<T>({ items, Component }: StoryListProps<T>) {
  return (
    <Container>
      {items.map((item, i) => (
        <Component key={`${i}`} {...item} />
      ))}
    </Container>
  );
}
