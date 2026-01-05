// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const ProblemAnalytic = () => {
  const items = [
    [
      "Kecepatan Data (Velocity)",
      "Transaksi masuk dalam jumlah ribuan per detik; sistem sekuensial akan mengalami antrian panjang (bottleneck).",
    ],
    [
      "Volume Data (Volume)",
      "Penyimpanan dan analisis data historis nasabah memerlukan klaster komputer karena tidak muat dalam satu mesin tunggal.",
    ],
    [
      "Kompleksitas Komputasi",
      "Algoritma Deep Learning seperti BiLSTM memerlukan daya komputasi tinggi yang jika dijalankan secara tunggal akan memakan waktu lama.",
    ],
    [
      "Ketersediaan (Availability)",
      "Sistem tidak boleh mati (down). Jika satu server gagal, sistem harus tetap berjalan.",
    ],
  ];

  return (
    <motion.section
      initial="hidden"
      id="problem-analytic"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={classNames(
        "px-5",
        "py-24",
        "mx-auto",
        "container",
        "text-white",
        "scroll-mt-20"
      )}
    >
      <motion.h2
        variants={itemVariants}
        className={classNames("text-4xl", "font-bold", "mb-12")}
      >
        Analisis Permasalahan
      </motion.h2>

      <div
        className={classNames("grid", "grid-cols-1", "md:grid-cols-2", "gap-6")}
      >
        {items.map(([title, desc], i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={classNames(
              "p-6",
              "border",
              "rounded-xl",
              "bg-white/5",
              "border-cyan-400/20"
            )}
          >
            <div className={classNames("flex", "gap-3")}>
              <CircleCheck className={classNames("text-cyan-300", "mt-1")} />
              <div>
                <h4 className={classNames("font-semibold", "text-lg")}>
                  {title}
                </h4>
                <p className={classNames("text-gray-300", "text-sm", "mt-1")}>
                  {desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProblemAnalytic;
