import useSWR from "swr"; // fetches data and stores it locally, like redux would
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlist: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
