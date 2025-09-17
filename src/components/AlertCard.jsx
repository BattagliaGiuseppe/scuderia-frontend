export default function AlertCard({ part }) {
  const today = new Date();
  const expDate = new Date(part.expiration_date);
  const diffDays = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));

  let color = 'green';
  if(diffDays <= 30) color = 'red';
  else if(diffDays <= 60) color = 'yellow';

  return (
    <div className={`border p-4 rounded shadow bg-${color}-200`}>
      <h2 className="font-bold">{part.part_name}</h2>
      <p>Veicolo ID: {part.vehicle_id}</p>
      <p>Scadenza: {part.expiration_date}</p>
      <p>{diffDays} giorni rimanenti</p>
    </div>
  );
}
