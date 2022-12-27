import { Button } from 'react-bootstrap';

export function Admin() {
  return (
    <>
      <div className="admin d-flex gap-3 align-items-center justify-content-center">
      <Button variant="danger">Sign up</Button>
      <Button variant="dark">Log in</Button>
      </div>
    </>
  );
}

export default Admin;
