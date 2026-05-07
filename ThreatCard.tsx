
type Props = {
  title: string;
  value: string;
};

export default function ThreatCard({ title, value }: Props) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500 shadow-lg">
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-3xl font-bold text-cyan-400 mt-2">{value}</p>
    </div>
  );
}
