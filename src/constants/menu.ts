export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "menu",
    label: "Menu",
    isTitle: true,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    isTitle: false,
    icon: "mgc_home_3_line",
    url: "/dashboard",
  },
  {
    key: "apps",
    label: "Apps",
    isTitle: true,
  },
  {
    key: "apps-tickets",
    label: "Tickets",
    isTitle: false,
    icon: "mgc_coupon_line",
    url: "/apps/tickets",
  },
  {
    key: "apps-reports",
    label: "Reports",
    isTitle: false,
    icon: "mgc_file_line",
    url: "/report",
  },
  {
    key: "apps-uploads",
    label: "Upload Files",
    isTitle: false,
    icon: "mgc_upload_2_line",
    url: "/uploads",
  },
  {
    key: "apps-billings",
    label: "Billings",
    isTitle: false,
    icon: "mgc_wallet_line",
    url: "/billings",
  },
  {
    key: "apps-clients",
    label: "Clients",
    isTitle: false,
    icon: "mgc_user_3_line",
    url: "/clients",
  },
  {
    key: "apps-messages",
    label: "Messages",
    isTitle: false,
    icon: "mgc_message_2_line",
    url: "/messages",
  },
  {
    key: "auth",
    label: "Auth Pages",
    isTitle: false,
    icon: "mgc_user_3_line",
    children: [
      {
        key: "auth-login",
        label: "Login",
        url: "/auth/login",
        parentKey: "auth",
      },
      {
        key: "auth-register",
        label: "Register",
        url: "/auth/register",
        parentKey: "auth",
      },
      {
        key: "auth-recover-password",
        label: "Recover Password",
        url: "/auth/recover-password",
        parentKey: "auth",
      },
      {
        key: "auth-lock-screen",
        label: "Lock Screen",
        url: "/auth/lock-screen",
        parentKey: "auth",
      },
    ],
  },
];

export const getMenuItems = (): MenuItemTypes[] => MENU_ITEMS; // Ensure this is exported
export { MENU_ITEMS };