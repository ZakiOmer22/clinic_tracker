"use client";

import { useState, useEffect } from "react";
import TrackerSelector from "@/components/TrackerSelector";
import TrackerForm from "@/components/TrackerForm";
import TrackerTable from "@/components/TrackerTable";
import Header from "@/components/Header";

export default function Home() {
  const [type, setType] = useState("patients");
  const [items, setItems] = useState<any[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(type);
    if (saved) setItems(JSON.parse(saved));
    else setItems([]);
  }, [type]);

  // Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(items));
  }, [items, type]);

  const handleAdd = (item: any) => setItems([...items, item]);
  const handleDelete = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  return (
    <main className="p-6 max-w-3xl mx-auto min-h-screen font-sans">
      <Header />
      <TrackerSelector value={type} onChange={setType} />
      <TrackerForm type={type} onAdd={handleAdd} />
      <TrackerTable type={type} items={items} onDelete={handleDelete} />
    </main>
  );
}