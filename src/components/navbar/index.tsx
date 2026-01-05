// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Info,
  Home,
  Settings,
  Sparkles,
  BarChart3,
  Handshake,
  TriangleAlert,
} from "lucide-react";

const sections = [
  { id: "home", icon: Home, label: "Beranda", liteLabel: "Beranda" },
  { id: "abstract", icon: Info, label: "Abstrak", liteLabel: "Abstrak" },
  {
    id: "intro",
    icon: Handshake,
    label: "Pendahuluan",
    liteLabel: "Pendahuluan",
  },
  {
    id: "problem-analytic",
    icon: TriangleAlert,
    label: "Analisis Permasalahan",
    liteLabel: "Masalah",
  },
  {
    id: "design",
    icon: Settings,
    label: "Desain Solusi Paralel & Terdistribusi",
    liteLabel: "Desain",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analisis & Evaluasi Performa",
    liteLabel: "Analisis",
  },
  {
    id: "recommendation",
    icon: Sparkles,
    label: "Rekomendasi Teknis",
    liteLabel: "Rekomendasi",
  },
];

const DesktopNavbar = () => {
  const [active, setActive] = useState<string>("abstract"),
    [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const top = document.getElementById(sections[0].id)?.offsetTop ?? 0;
      const bottom =
        document.getElementById(sections[sections.length - 1].id)?.offsetTop ??
        0;

      const scrollY = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(
        Math.max((scrollY - top) / (bottom - top), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <aside
      className={classNames(
        "z-50",
        "fixed",
        "left-6",
        "hidden",
        "top-1/2",
        "lg:block",
        "-translate-y-1/2"
      )}
    >
      <div
        className={classNames(
          "flex",
          "gap-y-8",
          "relative",
          "flex-col",
          "items-center"
        )}
      >
        <div
          className={classNames(
            "top-0",
            "w-0.5",
            "h-full",
            "absolute",
            "rounded-full",
            "bg-white/10"
          )}
        />

        <motion.div
          className={classNames(
            "top-0",
            "w-0.5",
            "absolute",
            "rounded-full",
            "bg-cyan-400"
          )}
          style={{ originY: 0 }}
          animate={{ height: `${scrollProgress * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {sections.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;

          return (
            <motion.button
              key={id}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.15 }}
              onClick={() => scrollTo(id)}
              className={classNames(
                "z-10",
                "w-11",
                "h-11",
                "flex",
                "group",
                "relative",
                "rounded-full",
                "items-center",
                "duration-300",
                "cursor-pointer",
                "justify-center",
                "transition-all",
                isActive
                  ? classNames(
                      "bg-cyan-300",
                      "text-gray-900",
                      "shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                    )
                  : classNames(
                      "border",
                      "text-white",
                      "bg-gray-900",
                      "border-white/15"
                    )
              )}
            >
              <Icon size={18} />

              <span
                className={classNames(
                  "ml-4",
                  "px-3",
                  "py-1",
                  "border",
                  "text-xs",
                  "absolute",
                  "left-full",
                  "opacity-0",
                  "rounded-md",
                  "text-white",
                  "duration-200",
                  "bg-gray-900",
                  "translate-x-2",
                  "transition-all",
                  "border-white/10",
                  "whitespace-nowrap",
                  "group-hover:opacity-100",
                  "group-hover:translate-x-0"
                )}
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
};

const MobileNavbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const middle = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;

        if (middle >= el.offsetTop) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={classNames(
        "z-50",
        "fixed",
        "bottom-0",
        "border-t",
        "inset-x-0",
        "lg:hidden",
        "backdrop-blur",
        "bg-gray-950/90",
        "border-white/10"
      )}
    >
      <div className={classNames("grid", "grid-cols-7")}>
        {sections.map(({ id, icon: Icon }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={classNames(
                "py-4",
                "flex",
                "relative",
                "flex-col",
                "gap-y-0.5",
                "items-center"
              )}
            >
              <motion.div
                animate={{
                  y: isActive ? -2 : 0,
                  scale: isActive ? 1.05 : 1,
                }}
                className={classNames(
                  isActive ? "text-cyan-300" : "text-white/50"
                )}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon size={20} />
              </motion.div>

              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className={classNames(
                    "w-6",
                    "h-0.5",
                    "absolute",
                    "bottom-0",
                    "rounded-full",
                    "bg-cyan-300",
                    "shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <nav>
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
};

export default Navbar;
