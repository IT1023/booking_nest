import { lazy } from "react";
const Concierge = lazy(() => import("../pages/general_pages/Concierge"));
const Contact = lazy(() => import("../pages/general_pages/Contact"));
const Deals = lazy(() => import("../pages/general_pages/Deals"));
const FAQ = lazy(() => import("../pages/general_pages/FAQ"));
const Home = lazy(() => import("../pages/general_pages/Home"));
const NotFound = lazy(() => import("../pages/general_pages/NotFound"));
const Reservations = lazy(() => import("../pages/general_pages/Reservations"));
const Blogs = lazy(() => import("../pages/general_pages/Blogs"));
const Map = lazy(() => import("../pages/general_pages/Map"));
const About = lazy(() => import("../pages/general_pages/About"));
const GeneralInformation = lazy(
  () => import("../pages/general_pages/GeneralInformation"),
);
const Live = lazy(() => import("../pages/general_pages/Live"));
const Weather = lazy(() => import("../pages/general_pages/Weather"));
const Express = lazy(() => import("../pages/general_pages/Express"));
const LongStay = lazy(() => import("../pages/general_pages/LongStay"));
import type { TRoutes } from "../utils/Types";

export const general_pages: TRoutes[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/concierge",
    element: Concierge,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/booking-nest-accommodation-deals",
    element: Deals,
  },
  {
    path: "/faq",
    element: FAQ,
  },
  {
    path: "*",
    element: NotFound,
  },
  {
    path: "/booking-nest-accommodation",
    element: Reservations,
  },
  {
    path: "/blogs",
    element: Blogs,
  },
  {
    path: "/map",
    element: Map,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/booking-nest-information",
    element: GeneralInformation,
  },
  {
    path: "/webcam",
    element: Live,
  },
  {
    path: "/booking-nest-weather",
    element: Weather,
  },
  {
    path: "/express-check-in",
    element: Express,
  },
  {
    path: "/booking-nest-long-stay",
    element: LongStay,
  },
];
