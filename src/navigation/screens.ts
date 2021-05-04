import {
  authRoute,
  calendarRoute,
  codeConfirmationRoute,
  loginRoute,
  mainRoute,
  projectsRoute,
  recordsRoute
} from './routes';

export type AuthScreens = {
  [loginRoute]: undefined;
  [codeConfirmationRoute]: { phone: string };
};

export type MainScreens = {
  [recordsRoute]: undefined;
  [calendarRoute]: undefined;
  [projectsRoute]: undefined;
};

export type RootScreens = {
  [authRoute]: undefined;
  [mainRoute]: undefined;
};
