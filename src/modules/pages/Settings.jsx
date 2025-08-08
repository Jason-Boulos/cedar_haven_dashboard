import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../../shared/ui/Heading";
import Row from "../../shared/ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update Settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
