import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RecordsScreen } from 'features/records/screens';
import { CalendarScreen } from 'features/calendar/screens';
import { ProjectsScreen } from 'features/projects/screens';
import { calendarRoute, projectsRoute, recordsRoute } from '../routes';
import { MainScreens } from '../screens';

const MainDrawer = createDrawerNavigator<MainScreens>();

const MainNavigator = () => {
  return (
    <MainDrawer.Navigator>
      <MainDrawer.Screen name={recordsRoute} component={RecordsScreen} />
      <MainDrawer.Screen name={calendarRoute} component={CalendarScreen} />
      <MainDrawer.Screen name={projectsRoute} component={ProjectsScreen} />
    </MainDrawer.Navigator>
  );
};

export default MainNavigator;
