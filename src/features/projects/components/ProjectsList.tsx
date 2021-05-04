import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProjectsListItem } from 'api/clients/projects/types';
import Project from './Project';

interface Props {
  items: ProjectsListItem[];
  onLoadMore?: () => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const ProjectsList: FunctionComponent<Props> = (props) => {
  const { items, onRefresh, isRefreshing, onLoadMore } = props;

  return (
    <View style={styles.container}>
      <FlatList
        onEndReachedThreshold={0}
        onEndReached={onLoadMore}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        data={items}
        renderItem={Project}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProjectsList;
