import Table from "../../../shared/ui/Table";
import Menus from "../../../shared/ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../../shared/ui/Empty";
import CabinRow from "./CabinsRow";
import { useCabins } from "./useCabins";
import Spinner from "../../../shared/ui/Spinner";

function CabinTable() {
  const { isLoadingCabins, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoadingCabins) return <Spinner />;

  if (!cabins?.length) return <Empty resourceName="cabins" />;

  // Filtering
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin?.discount > 0);
  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin?.discount === 0);

  // Sorting
  const sortValue = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortValue.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  function compareText(a, b) {
    if (a[field].toLowerCase() < b[field].toLowerCase()) {
      return -1 * modifier;
    }
    if (a[field].toLowerCase() > b[field].toLowerCase()) {
      return 1 * modifier;
    }
    return 0;
  }
  function compareNumbers(a, b) {
    return (a[field] - b[field]) * modifier;
  }
  const sortedCabins =
    typeof cabins[0][field] === "number"
      ? filteredCabins.sort(compareNumbers)
      : filteredCabins.sort(compareText);

  return (
    <Menus>
      <Table columns="0.6fr 2.5fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
