// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const Recommendation = () => {
  const recommendations = [
    {
      title: "Skalabilitas Horizontal",
      desc: "Gunakan strategi auto-scaling pada cloud (seperti AWS atau Google Cloud) agar jumlah node Spark dapat bertambah otomatis saat beban transaksi bank melonjak (misalnya pada akhir bulan).",
    },
    {
      title: "Optimasi Hardware",
      desc: "Gunakan GPU Acceleration (seperti NVIDIA CUDA) khusus untuk bagian model BiLSTM agar proses inferensi deep learning menjadi 10x lebih cepat dibanding hanya menggunakan CPU.",
    },
    {
      title: "Penerapan Replikasi Data",
      desc: "Di dalam Apache Kafka, pastikan jumlah replika minimal 3. Rekomendasi ini bertujuan untuk menjaga Fault Tolerance; jika satu node penyimpan data rusak, data tetap aman di node lain.",
    },
    {
      title: "Monitoring Latensi",
      desc: "Implementasikan alat monitoring seperti Prometheus atau Grafana untuk memantau waktu perjalanan data dari Kafka ke Spark, guna memastikan tidak ada simpul yang menjadi penghambat (bottleneck).",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      id="recommendation"
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
        className={classNames("mb-16", "max-w-xl")}
      >
        <h2 className={classNames("text-4xl font-bold")}>Rekomendasi Teknis</h2>
        <div className={classNames("mt-3 h-1 w-24 bg-cyan-300")} />
        <p className={classNames("mt-4 text-gray-400 text-sm")}>
          Strategi implementasi untuk meningkatkan skalabilitas, performa, dan
          keandalan sistem BankNet.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className={classNames("grid", "grid-cols-1", "md:grid-cols-2", "gap-8")}
      >
        {recommendations.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={classNames(
              "p-8",
              "border",
              "relative",
              "transition",
              "rounded-2xl",
              "to-transparent",
              "bg-linear-to-br",
              "from-cyan-400/10",
              "border-cyan-400/20",
              "hover:border-cyan-300/40"
            )}
          >
            <span
              className={classNames(
                "w-10",
                "h-10",
                "flex",
                "-top-4",
                "text-sm",
                "absolute",
                "-right-4",
                "font-bold",
                "items-center",
                "rounded-full",
                "justify-center",
                "text-cyan-300",
                "bg-cyan-400/20"
              )}
            >
              {i + 1}
            </span>

            <h4 className={classNames("text-lg", "font-semibold", "mb-2")}>
              {item.title}
            </h4>
            <p
              className={classNames(
                "text-sm",
                "text-gray-300",
                "leading-relaxed"
              )}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Recommendation;
