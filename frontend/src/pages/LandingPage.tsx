import { Link } from "react-router-dom";
import {
  Cpu,
  Radio,
  Server,
  Database,
  LayoutDashboard,
  Activity,
  BarChart3,
  BellRing,
  History,
  Download,
  Thermometer,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  { icon: Cpu, label: "Sensor" },
  { icon: Radio, label: "MQTT" },
  { icon: Server, label: "Server" },
  { icon: Database, label: "Database" },
  { icon: LayoutDashboard, label: "Dasbor" },
];

const FEATURES = [
  {
    icon: Activity,
    tint: "bg-teal-50 text-teal-700",
    title: "Monitoring real-time",
    body: "Suhu dan kelembapan masuk lewat WebSocket setiap beberapa detik, tanpa perlu refresh halaman.",
  },
  {
    icon: BarChart3,
    tint: "bg-sky-50 text-sky-700",
    title: "Grafik naik-turun",
    body: "Lihat tren per jam dan per hari, plus garis target ambang batas yang bisa disesuaikan.",
  },
  {
    icon: BellRing,
    tint: "bg-amber-50 text-amber-700",
    title: "Alert ambang batas",
    body: "Peringatan otomatis saat suhu atau kelembapan melewati batas yang kamu tentukan.",
  },
  {
    icon: History,
    tint: "bg-violet-50 text-violet-700",
    title: "Riwayat & filter",
    body: "Telusuri data historis berdasarkan tanggal dan sensor, dengan pencarian kode sensor.",
  },
  {
    icon: Cpu,
    tint: "bg-rose-50 text-rose-700",
    title: "Manajemen sensor",
    body: "Daftar, aktif, matikan, dan kelola kunci API tiap sensor dari satu halaman.",
  },
  {
    icon: Download,
    tint: "bg-teal-50 text-teal-700",
    title: "Aplikasi Android",
    body: "Pantau dari HP lewat aplikasi Android yang bisa diunduh langsung.",
  },
];

export function LandingPage() {
  return (
    <main className="min-h-svh bg-white text-[#1c2530]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-[#14b8a6] text-white">
            <Thermometer className="size-5" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Pemantauan Gudang Obat</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="inline-flex h-8 items-center justify-center rounded-lg px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-[#14b8a6] px-3 text-sm font-medium text-white transition-colors hover:bg-[#0e9f90]"
          >
            Daftar
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 [background:linear-gradient(135deg,#0d9488,#14b8a6_55%,#38bdf8)]"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur">
              <Activity className="size-3.5" />
              Pemantauan suhu dan kelembapan gudang obat
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Pantau suhu dan kelembapan gudang obat dari satu dasbor
            </h1>
            <p className="mt-5 text-lg text-pretty text-white/85">
              Sensor mengirim data ke dasbor untuk menampilkan kondisi gudang dan memberi peringatan
              saat ambang operasional terlampaui. Sesuaikan ambang dengan SOP penyimpanan obat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-white px-4 text-sm font-semibold text-[#0d9488] transition-colors hover:bg-teal-50"
              >
                Mulai Sekarang
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex h-9 items-center rounded-lg border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-5 sm:items-center">
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-[#0d9488]">
                <s.icon className="size-5" />
              </span>
              <span className="text-sm font-medium">{s.label}</span>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden size-5 shrink-0 text-slate-300 sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Apa saja yang bisa kamu lihat</h2>
          <p className="mt-2 text-slate-500">
            Data suhu dan kelembapan asli dari sensor, tanpa angka yang dibuat-buat.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <span className={`grid size-10 place-items-center rounded-xl ${f.tint}`}>
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500">
          <span>Pemantauan suhu dan kelembapan gudang obat. Ambang harus mengikuti SOP penyimpanan.</span>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-slate-800" to="/login">
              Masuk
            </Link>
            <Link className="transition-colors hover:text-slate-800" to="/register">
              Daftar
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
