import FadeUp from "../components/FadeUp.jsx";

export default function LiveStatus() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10">
      <FadeUp>
        <div className="rounded-2xl border border-[#1f2937] bg-white/5 px-6 py-4 text-center text-sm text-white/70 backdrop-blur">
          Сьогодні в роботі:{" "}
          <span className="font-semibold text-white">124 авто</span> по всій
          Україні. Середній час продажу:{" "}
          <span className="font-semibold text-white">12 днів</span>
        </div>
      </FadeUp>
    </section>
  );
}
