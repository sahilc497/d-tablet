"use client";

const specs = [
  { label: "Display Size", value: "Standard A5 Size" },
  { label: "Protective Cover", value: "Spunlace Leather" },
  { label: "Pressure Levels", value: "8192 levels" },
  { label: "Tilt Function", value: "±60°" },
  { label: "Battery Capacity", value: "1300 mAh (18h use, 30d standby)" },
  { label: "Charge Time", value: "≤4 hours" },
  { label: "Connectivity", value: "Bluetooth 5.0" },
  { label: "Offline Storage", value: "Up to 50 Pages" },
];

export default function Specifications() {
  return (
    <section className="py-32 px-10 bg-[#050505] flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tight">Technical Specifications.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-center py-6 border-b border-white/10 hover:bg-white/[0.02] px-4 rounded-xl transition-colors">
              <span className="text-gray-400 text-lg">{spec.label}</span>
              <span className="text-white font-medium text-lg text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
