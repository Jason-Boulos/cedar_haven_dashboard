import Row from "../../shared/ui/Row";
import Heading from "../../shared/ui/Heading";
import CabinTable from "../features/cabins/CabinsTable";
import AddCabin from "../features/cabins/addCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
