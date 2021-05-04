import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProjectsListItem } from 'api/clients/projects/types';

interface Props {
  item: ProjectsListItem;
}

const Project: FunctionComponent<Props> = (props) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});

export default Project;
