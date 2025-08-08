import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/apiCabins";

export function useCabins() {
  const {
    isPending: isLoadingCabins,
    isError,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoadingCabins, isError, cabins, error };
}
