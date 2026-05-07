
import Sidebar from "../components/Sidebar";
import ThreatCard from "../components/ThreatCard";
import ThreatChart from "../components/ThreatChart";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            CyberAI Security Operations Center
          </h1>
          <p className="text-gray-400 mt-2">
            AI-Driven Ethical Cybersecurity Analysis Framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <ThreatCard title="Threat Level" value="HIGH" />
          <ThreatCard title="Detected Attacks" value="152" />
          <ThreatCard title="Critical CVEs" value="27" />
          <ThreatCard title="Protected Assets" value="1,204" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ThreatChart />

          <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500">
            <h2 className="text-xl mb-4">Live Threat Feed</h2>

            <div className="space-y-3">
              <div className="bg-slate-900 p-3 rounded">
                Suspicious login attempt detected
              </div>

              <div className="bg-slate-900 p-3 rounded">
                Malware signature identified
              </div>

              <div className="bg-slate-900 p-3 rounded">
                AI anomaly confidence score: 92%
              </div>

              <div className="bg-slate-900 p-3 rounded">
                CVE-2026-001 exposure detected
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 p-5 rounded-xl border border-cyan-500">
          <h2 className="text-xl mb-4">Attack Simulation</h2>

          <div className="h-64 flex items-center justify-center border border-dashed border-cyan-400 rounded-lg">
            Interactive Attack Graph Visualization Placeholder
          </div>
        </div>
      </div>
    </main>
  );
}
