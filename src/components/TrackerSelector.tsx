import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TrackerSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="my-4">
      <Tabs value={value} onValueChange={onChange}>
        <TabsList>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="medicines">Medicines</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}