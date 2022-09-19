import { $host } from "./index";

export const fetchDevices = async () => {
  const { data } = await $host.get("api/device/getAll");
  return data;
};
