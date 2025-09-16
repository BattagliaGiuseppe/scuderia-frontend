export default function VehicleCard({ vehicle }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{vehicle.model}</h2>
      <p>Telaio: {vehicle.chassis}</p>
      <p>Targa: {vehicle.plate}</p>
      <p>Numero Gara: {vehicle.race_number}</p>
      <p>Anno: {vehicle.year}</p>
      <p>Status: {vehicle.status}</p>
    </div>
  );
}
