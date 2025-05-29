// utils/auth.tsx
const AUTH_SESSION_KEY = "konrix_user";

export const getLoggedInUser = (): any => {
  const user = sessionStorage.getItem(AUTH_SESSION_KEY);
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
};

export const isUserAuthenticated = (): boolean => {
  const user = getLoggedInUser();
  if (!user) return false;
  return true; // Token expiration check can be moved to APICore.isUserAuthenticated
};