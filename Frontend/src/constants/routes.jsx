import React from "react";
import EventDetails from "../pages/EventDetails";

//==========================================
// lazy load components
//==========================================

// user components
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Programs = React.lazy(() => import("../pages/Programs"));
const Teachers = React.lazy(() => import("../pages/Teachers"));
const Announcements = React.lazy(() => import("../pages/Announcements"));
const Events = React.lazy(() => import("../pages/Events"));
const Gallery = React.lazy(() => import("../pages/Galleries"));
const Contact = React.lazy(() => import("../pages/Contact"));

// admin components
const AdminDashboard = React.lazy(() => import("../pages/admin/dashboard"));
const AdminLogin = React.lazy(() => import("../pages/admin/login"));
const AdminLogout = React.lazy(() => import("../pages/admin/logout"));
const ManageAnnouncements = React.lazy(() =>
  import("../pages/admin/announcements")
);
const ManageEvents = React.lazy(() => import("../pages/admin/events"));
const ManageTeachers = React.lazy(() => import("../pages/admin/teachers"));
const ManagePrograms = React.lazy(() => import("../pages/admin/programs"));
const ManageGallery = React.lazy(() => import("../pages/admin/galleries"));
const ManageContacts = React.lazy(() => import("../pages/admin/contacts"));

//==========================================
// routes
//==========================================

// user routes
const userRoutes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    showInMenu: true,
  },

  {
    name: "About",
    path: "/about",
    component: <About />,
    showInMenu: true,
  },
  {
    name: "programs",
    path: "/programs",
    component: <Programs />,
    showInMenu: true,
  },
  {
    name: "Teachers",
    path: "/teachers",
    component: <Teachers />,
    showInMenu: true,
  },
  {
    name: "Announcements",
    path: "/announcements",
    component: <Announcements />,
    showInMenu: true,
  },
  {
    name: "Events",
    path: "/events",
    component: <Events />,
    showInMenu: true,
  },
  // dynamic routes for Events details
  {
    name: "Event Details",
    path: "/events/:id",
    component: <EventDetails />,
    showInMenu: false,
  },
  {
    name: "gallery",
    path: "/gallery",
    component: <Gallery />,
    showInMenu: true,
  },
  {
    name: "contact",
    path: "/contact",
    component: <Contact />,
    showInMenu: true,
  },
];
// admin routes
const adminRoutes = [
  {
    name: "Admin Dashboard",
    path: "/admin/dashboard",
    component: <AdminDashboard />,
  },
  {
    name: "Admin login",
    path: "/admin/login",
    component: <AdminLogin />,
  },
  {
    name: "Admin logout",
    path: "/admin/logout",
    component: <AdminLogout />,
  },
  {
    name: "Manage Announcements",
    path: "/admin/announcements",
    component: <ManageAnnouncements />,
  },
  {
    name: "Manage Events",
    path: "/admin/events",
    component: <ManageEvents />,
  },
  {
    name: "Manage Teachers",
    path: "/admin/teachers",
    component: <ManageTeachers />,
  },
  {
    name: "Manage Programs",
    path: "/admin/programs",
    component: <ManagePrograms />,
  },
  {
    name: "Manage Gallery",
    path: "/admin/gallery",
    component: <ManageGallery />,
  },
  {
    name: "Manage Contacts",
    path: "/admin/contacts",
    component: <ManageContacts />,
  },
];

export { userRoutes, adminRoutes };
