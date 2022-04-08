import { RootState } from "..";

export const selectLoading = (state: RootState): boolean => state.user.loading;

export const selectAccessToken = (state: RootState): string => state.user.accessToken;

export const selectUsername = (state: RootState): string => state.user.username;
