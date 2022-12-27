import { Button } from "react-bootstrap";

export function Home() {
  return (
    <>
      <div className="headline">
        <h2>Blood Donation 🩸</h2>
        <p className="ps-5">Donate blood and Save Lives.</p>
      </div>
      <div className="home d-flex gap-3 align-items-center justify-content-center">
        <Button variant="danger">Apply as Donor</Button>
        <Button variant="dark">Ask for Donor</Button>
      </div>
    </>
  );
}

export default Home;
