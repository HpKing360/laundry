const navLinks = [
  {
    path: "/dashboard",
    icon: "ri-apps-2-line",
    display: "Dashboard",
  },
  {
    path: "/orders",
    icon: "ri-shopping-basket-line",
    display: "Orders",
  },
  {
    path: "/delivery-men",
    icon: "ri-truck-line",
    display: "Delivery Men",
    childrens: [
      {
        path: "/delivery-men",
        icon: "ri-truck-line",
        display: "Delivery Men",
      },
      {
        display: "New Man",
        icon: "ri-add-circle-line",
        path: "/new-man",
      },
    ],
  },
  {
    path: "/customers",
    icon: "ri-map-pin-user-fill",
    display: "Customers",
  },
  {
    path: "/users",
    icon: "ri-team-line",
    display: "Admin",
    childrens: [
      {
        display: "All Admin",
        icon: "ri-team-line",
        path: "/users",
      },
      {
        display: "New Admin",
        icon: "ri-add-circle-line",
        path: "/new-user",
      },
    ],
  },
  {
    path: "/profile",
    icon: "ri-settings-2-line",
    display: "Settings",
    childrens: [
      {
        display: "Profile",
        icon: "ri-user-line",
        path: "profile",
      },
      {
        display: "Informations",
        icon: "ri-edit-line",
        path: "/change-details",
      },
      {
        display: "Profile Picture",
        icon: "ri-account-circle-line",
        path: "/change-profile-pic",
      },
      {
        display: "Password",
        icon: "ri-lock-2-line",
        path: "/change-password",
      },
    ],
  },
];

export default navLinks;
