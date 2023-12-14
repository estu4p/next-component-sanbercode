import { withAuth } from "../with-Auth";

function Header() {
  return <div>Header</div>;
}

export default withAuth(Header);
