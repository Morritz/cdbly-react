import { factoryParameters, pm, serializers } from "geschichte";

const parameterConfig = {
  page: pm("page", serializers.int),
  id: pm("id", serializers.int),
};

const defaultValue = {
  page: 1,
  id: 0,
};

export const { useQuery, createQueryString, parseQueryString } =
  factoryParameters(parameterConfig, defaultValue);
