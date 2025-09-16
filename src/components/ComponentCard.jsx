export default function ComponentCard({ component }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{component.type}</h2>
      <p>Modello: {component.model}</p>
      <p>Serial: {component.serial}</p>
      <p>Status: {component.status}</p>
    </div>
  );
}
