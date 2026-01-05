// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const Analytics = () => {
  const metrics = [
    {
      label: "Latency",
      value: "45 ms",
      desc: "Waktu respon end-to-end dari ingest Kafka hingga hasil inferensi.",
    },
    {
      label: "Throughput",
      value: "1000 Mbps",
      desc: "Laju maksimum data transaksi yang dapat diproses secara stabil.",
    },
    {
      label: "Akurasi Deteksi",
      value: "98.5%",
      desc: "Tingkat keberhasilan model BiLSTM dalam mendeteksi transaksi fraud.",
    },
  ];

  return (
    <motion.section
      id="analytics"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={classNames(
        "px-5",
        "py-28",
        "mx-auto",
        "container",
        "text-white"
      )}
    >
      <motion.div
        variants={itemVariants}
        className={classNames("mb-16", "max-w-2xl")}
      >
        <h2 className={classNames("text-4xl", "font-bold")}>
          Analisis & Evaluasi Performa
        </h2>
        <div className={classNames("mt-3", "h-1", "w-24", "bg-cyan-300")} />
        <p
          className={classNames(
            "mt-4",
            "text-sm",
            "text-gray-400",
            "leading-relaxed"
          )}
        >
          Evaluasi dilakukan untuk mengukur efektivitas arsitektur paralel dan
          terdistribusi BankNet terhadap beban transaksi berskala enterprise.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className={classNames("grid", "grid-cols-1", "md:grid-cols-3", "gap-8")}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={classNames(
              "p-8",
              "border",
              "relative",
              "rounded-2xl",
              "to-transparent",
              "bg-linear-to-br",
              "from-cyan-400/10",
              "border-cyan-400/20"
            )}
          >
            <div
              className={classNames(
                "h-1",
                "top-0",
                "absolute",
                "inset-x-0",
                "rounded-t-2xl",
                "bg-cyan-300/60"
              )}
            />

            <h4
              className={classNames(
                "text-sm",
                "uppercase",
                "tracking-wider",
                "text-gray-400"
              )}
            >
              {m.label}
            </h4>
            <p
              className={classNames(
                "mt-4",
                "text-4xl",
                "font-bold",
                "text-cyan-300"
              )}
            >
              {m.value}
            </p>
            <p
              className={classNames(
                "mt-4",
                "text-sm",
                "text-gray-300",
                "leading-relaxed"
              )}
            >
              {m.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={classNames(
          "pl-6",
          "mt-20",
          "max-w-3xl",
          "border-l-4",
          "border-cyan-300"
        )}
      >
        <h4 className={classNames("font-semibold", "text-lg", "mb-2")}>
          Insight Utama
        </h4>
        <p className={classNames("text-gray-300", "leading-relaxed")}>
          Hasil pengujian menunjukkan bahwa peningkatan jumlah node pada cluster
          Spark dan Kafka berbanding lurus dengan peningkatan throughput sistem,
          sementara latensi tetap berada dalam batas operasional yang dapat
          diterima. Hal ini mengindikasikan bahwa pendekatan paralel dan
          terdistribusi mampu memberikan skalabilitas tanpa mengorbankan
          akurasi.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Analytics;
