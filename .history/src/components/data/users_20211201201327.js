const users = [
  {
    name: "Saud ul Hassan",
    email: "saud@gmail.com",
    phone: "+92 302 2321605",
    id: "p1",
    location: {
      lat: 31.419573,
      lng: 74.28868,
    },
  },
  {
    name: "Hamza Jutt",
    email: "hamza@gmail.com",
    phone: "+92 312 3456789",
    id: "p2",
    location: {
      lat: 31.439066,
      lng: 74.286299,
    },
  },
];

export function getUsers() {
  return users;
}
