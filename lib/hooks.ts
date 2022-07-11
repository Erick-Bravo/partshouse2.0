import useSWR from "swr"; // fetches data and stores it locally, like redux would
                          // Garuanteed to make only one call.
                          
import fetcher from "./fetcher";

export const useUser = () => {
  const { data, error } = useSWR("/user", fetcher);

  return {
    userData: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePartshouse = () => {
  const { data, error } = useSWR("/partshouse", fetcher);

  return {
    partshouse: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRecord = () => {
  const { data, error } = useSWR("/record", fetcher);
  
  return {
    record: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
  
}
