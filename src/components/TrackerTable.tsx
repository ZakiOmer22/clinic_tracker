import { Button } from "@/components/ui/button";

export default function TrackerTable({ type, items, onDelete }: { type: string; items: any[]; onDelete: (i: number) => void }) {
  const renderHeaders = () => {
    switch (type) {
      case "patients":
        return ["Name", "Age", "Gender"];
      case "medicines":
        return ["Name", "Dosage", "Stock"];
      case "appointments":
        return ["Name", "Date", "Time"];
    }
  };

const renderHeaders = (): string[] => {
  switch (type) {
    case "patients":
      return ["Name", "Age", "Gender"];
    case "medicines":
      return ["Name", "Dosage", "Stock"];
    case "appointments":
      return ["Name", "Date", "Time"];
    default:
      return [];
  }
};

  return (
    <table className="w-full table-auto border text-sm">
      <thead>
        <tr>
          {headers.map((h, i) => <th key={i} className="border p-2 bg-gray-100">{h}</th>)}
          <th className="border p-2 bg-gray-100">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {headers.map((h, i) => <td key={i} className="border p-2">{item[h.toLowerCase()]}</td>)}
            <td className="border p-2 text-center">
              <Button size="sm" variant="destructive" onClick={() => onDelete(index)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
