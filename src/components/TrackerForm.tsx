import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TrackerForm({ type, onAdd }: { type: string; onAdd: (item: any) => void }) {
  const [fields, setFields] = useState({ name: "", age: "", gender: "", dosage: "", stock: "", date: "", time: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const item = getFieldsForType(type, fields);
    onAdd(item);
    setFields({ name: "", age: "", gender: "", dosage: "", stock: "", date: "", time: "" });
  };

  const getFieldsForType = (type: string, fields: any) => {
    switch (type) {
      case "patients":
        return { name: fields.name, age: fields.age, gender: fields.gender };
      case "medicines":
        return { name: fields.name, dosage: fields.dosage, stock: fields.stock };
      case "appointments":
        return { name: fields.name, date: fields.date, time: fields.time };
    }
  };

  return (
    <div className="space-y-2 mb-6">
      <div className="flex gap-2 flex-wrap">
        <Input name="name" value={fields.name} onChange={handleChange} placeholder="Name" />
        {type === "patients" && <>
          <Input name="age" value={fields.age} onChange={handleChange} placeholder="Age" />
          <Input name="gender" value={fields.gender} onChange={handleChange} placeholder="Gender" />
        </>}
        {type === "medicines" && <>
          <Input name="dosage" value={fields.dosage} onChange={handleChange} placeholder="Dosage" />
          <Input name="stock" value={fields.stock} onChange={handleChange} placeholder="Stock" />
        </>}
        {type === "appointments" && <>
          <Input name="date" value={fields.date} onChange={handleChange} placeholder="Date" />
          <Input name="time" value={fields.time} onChange={handleChange} placeholder="Time" />
        </>}
      </div>
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
}

