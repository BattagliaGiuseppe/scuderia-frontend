export default function MaintenanceCard({ maintenance }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{maintenance.type}</h2>
      <p>Veicolo ID: {maintenance.vehicle_id}</p>
      <p>Componente ID: {maintenance.component_id}</p>
      <p>Data: {maintenance.date}</p>
      <p>Km: {maintenance.km}</p>
      <p>Costo: {maintenance.cost}</p>
      <p>Note: {maintenance.notes}</p>
    </div>
  );
}
