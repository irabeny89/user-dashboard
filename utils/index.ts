import axios from "axios";
import type { APIResponse } from "../interfaces";
import { constantVariable } from "../config";
import { fakeAPIResponse } from '../data'

const { FEMALE_USERS, MALE_USERS, BASE_URL, DEFAULT_QUERY, DOWNLOAD_FORMAT } =
  constantVariable;

export const usersAPI = axios.create({
  baseURL: BASE_URL,
});

export const query = async (uri = DEFAULT_QUERY): Promise<APIResponse> => {
  try {
    if (process.env.OFFLINE_MODE) return fakeAPIResponse;
    const { data } = await usersAPI.get(uri);
    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

export const capitalize = (text: string) =>
  `${text[0].toUpperCase()}${text.slice(1)}`;

export const getJSONLink = (selection: string) => {
  const allUsersLink = `${BASE_URL}${DEFAULT_QUERY}&format=${DOWNLOAD_FORMAT}`;
  const maleUsersLink = `${BASE_URL}${DEFAULT_QUERY}&gender=male&format=${DOWNLOAD_FORMAT}`;
  const femaleUsersLink = `${BASE_URL}${DEFAULT_QUERY}&gender=female&format=${DOWNLOAD_FORMAT}`;

  switch (selection) {
    case MALE_USERS:
      return maleUsersLink;
    case FEMALE_USERS:
      return femaleUsersLink;
    default:
      return allUsersLink;
  }
};