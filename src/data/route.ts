export const route = [
  {
    name: "公司簡介",
    path: "/about",
  },
  {
    name: "產品資訊",
    path: "/product",
  },
  {
    name: "專人詢價",
    path: "/service",
  },
];

export const getRoutePathByName = (name: string) => {
  const routeItem = route.find(r => r.name === name);
  return routeItem ? routeItem.path : "";
};

export const navLinks = [
  {
    name: "公司簡介",
    path: "/about",
    words: ["/about"],
  },
  {
    name: "產品資訊",
    path: "/product",
    words: ["/product", "/product"],
  },
  {
    name: "專人詢價",
    path: "/service",
    words: ["/service"],
  },
];
