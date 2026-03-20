"use client";

const cards = [
  { src: "/group-basic.jpg", label: "BASIC", date: "29.03.2026" },
  { src: "/group-abc.jpg", label: "ABC DYNAMIKI", date: "28.03.2026" },
  { src: "/group-intermediate.jpg", label: "INTERMEDIATE", date: "26.04.2026" },
  { src: "/group-dynamika.jpg", label: "DYNAMIKA 2.0", date: "18.04.2026" },
  { src: "/group-advanced.jpg", label: "ADVANCED", date: "25.01.2026" },
];

export default function TrainingCardStack() {
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const startX = e.pageX - el.offsetLeft;
    const scrollLeft = el.scrollLeft;
    const onMove = (ev: MouseEvent) => {
      const x = ev.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <>
      <div
        className="flex gap-0 overflow-x-auto snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
      >
        {cards.map((item, i) => (
          <div
            key={item.src}
            className="relative flex-shrink-0 snap-center overflow-hidden rounded-xl"
            style={{
              width: "clamp(240px, 68vw, 380px)",
              aspectRatio: "3/4",
              marginLeft: i === 0 ? "0" : "-48px",
              zIndex: i + 1,
              boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
              transform: `rotate(${(i - 2) * 1.5}deg)`,
              transition: "transform 0.2s ease",
            }}
          >
            <img
              src={item.src}
              alt={`Szkolenie ${item.label} — Akademia Sway Poznań`}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-1">{item.date}</p>
              <p className="text-white font-heading text-xl font-bold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-text-muted font-body text-xs text-center mt-3 tracking-widest uppercase">Przeciągnij aby zobaczyć więcej</p>
    </>
  );
}
