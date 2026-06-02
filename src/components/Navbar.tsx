const navItems = [
  {
    label: "Trang chủ",
    icon: "🏠",
  },
  {
    label: "Khám phá",
    icon: "🔍",
  },
  {
    label: "Hồ sơ",
    icon: "👤",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-white/10 bg-black/90 text-white md:bottom-auto md:top-0 md:h-screen md:w-56 md:flex-col md:items-start md:justify-start md:border-r md:border-t-0 md:px-6 md:py-8">
      <h1 className="hidden text-2xl font-bold md:block">Video </h1>

      <div className="flex w-full items-center justify-around md:mt-10 md:flex-col md:items-start md:gap-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1 text-xs font-medium transition hover:text-red-500 md:flex-row md:text-base"
          >
            <span className="text-xl md:text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}