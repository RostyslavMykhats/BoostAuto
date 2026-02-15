export default function MainDecor() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#030712]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 top-16 h-48 w-48 rounded-full border border-white/5" />
        <div className="absolute right-16 top-40 h-64 w-64 rounded-full border border-white/5" />
        <div className="absolute left-1/2 top-80 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/5" />
      </div>
    </>
  );
}
