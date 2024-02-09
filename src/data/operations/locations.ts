import { PaginatedResponse, axiosInstance } from '../api';
import { Location } from '../model';

//getLocations
export interface LocationsVars {
  page: number;
}

export type LocationsData = PaginatedResponse<Location>;

export async function getLocations({ page }: LocationsVars): Promise<LocationsData> {
  const { data } = await axiosInstance.get<LocationsData>(`/location/?page=${page}`);
  return data;
}

//getLocation
export type LocationData = Location;

export async function getLocation(id: string): Promise<LocationData> {
  const { data } = await axiosInstance.get<LocationData>(`/location/${id}`);
  return data;
}
