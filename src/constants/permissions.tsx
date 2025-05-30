import { MenuItemTypes } from "../constants/menu";

export enum UserRoles {
  ADMIN = "Admin",
  CONSULTANT = "Consultant",
  CUSTOMER = "Customer",
}

export const menuPermissions: Record<UserRoles, string[]> = {
  [UserRoles.ADMIN]: ["dashboard", "apps-tickets", "apps-reports", "apps-uploads", "apps-billings", "apps-clients", "apps-messages", "auth"],
  [UserRoles.CONSULTANT]: ["dashboard", "apps-tickets", "apps-reports", "apps-uploads", "apps-billings", "apps-clients", "apps-messages"],
  [UserRoles.CUSTOMER]: ["dashboard", "apps-tickets", "apps-messages"],
};

export const routePermissions: Record<UserRoles, string[]> = {
  [UserRoles.ADMIN]: [
    "/dashboard",
    "/apps/tickets",
    "/report",
    "/uploads",
    "/billings",
    "/clients",
    "/messages",
    "/auth/login",
    "/auth/register",
    "/auth/recover-password",
    "/auth/lock-screen",
  ],
  [UserRoles.CONSULTANT]: [
    "/dashboard",
    "/apps/tickets",
    "/report",
    "/uploads",
    "/billings",
    "/clients",
    "/messages",
  ],
  [UserRoles.CUSTOMER]: [
    "/dashboard",
    "/apps/tickets",
    "/messages",
  ],
};

export const filterMenuItemsByRole = (
  menuItems: MenuItemTypes[],
  role: UserRoles
): MenuItemTypes[] => {
  const allowedKeys = menuPermissions[role] || [];
  return menuItems
    .map((item) => {
      if (item.isTitle) return item; // Keep title items
      if (allowedKeys.includes(item.key)) {
        if (item.children) {
          return {
            ...item,
            children: filterMenuItemsByRole(item.children, role),
          };
        }
        return item;
      }
      return null;
    })
    .filter((item): item is MenuItemTypes => item !== null);
};