import React from 'react';
import styled from 'styled-components/native';

interface IContainer {
  flexWrap?: boolean;
}

const Container = styled.ScrollView<IContainer>`
  flex: 1;
  ${({ flexWrap }) => !!flexWrap && 'flex-wrap: wrap;'}
`;

export type StoryListProps<T> = {
  items: T[];
  flexWrap?: boolean;
  Component: React.ComponentType<T>;
};

export function StoryList<T>({ items, flexWrap, Component }: StoryListProps<T>) {
  return (
    <Container flexWrap={flexWrap}>
      {items.map((item, i) => (
        <Component key={`${i}`} {...item} />
      ))}
    </Container>
  );
}
