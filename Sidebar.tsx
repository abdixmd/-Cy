
const menu = [
  "Dashboard",
  "Threat Intelligence",
  "CVE Scanner",
  "AI Detection",
  "Attack Simulation",
  "Governance",
  "Reports",
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-cyan-500 p-5">
      <h1 className="text-2xl font-bold text-cyan-400 mb-8">CyberAI</h1>
      <ul className="space-y-4">
        {menu.map((item) => (
          <li
            key={item}
            className="hover:text-cyan-300 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
