import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <img src={loading} alt="loading" />
    </div>
  );
}


