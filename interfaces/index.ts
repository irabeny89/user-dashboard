type Name = Record<"title" | "first" | "last", string>;
type Address = Record<"city" | "state" | "postcode", string> & {street: { name: string; number: number }};
type Coordinates = Record<"latitude" | "longitude", string>;
type Timezone = Record<"offset" | "description", string>;
type Location = Address & {coordinates: Coordinates, timezone: Timezone};
type Login = Record<
  "uuid" | "username" | "password" | "salt" | "md5" | "sha1" | "sha256",
  string
>;
type DOB = { date: string; age: number };
type Registered = { date: string; age: number };
type ID = Record<"name" | "value", string>;
type Picture = Record<"large" | "medium" | "thumbnail", string>;
type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type UserType = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DOB;
  registered: Registered;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
};
export type APIResponse = { results: UserType[]; info: Info };
