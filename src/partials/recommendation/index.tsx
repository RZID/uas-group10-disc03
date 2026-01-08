// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const Recommendation = () => {
  const recommendations = [
    {
      title: "Skalabilitas Horizontal",
      desc: ["Gunakan strategi auto-scaling pada cloud (seperti AWS atau Google Cloud) agar jumlah node Spark dapat bertambah otomatis saat beban transaksi bank melonjak (misalnya pada akhir bulan)."],
    },
    {
      title: "Optimasi Hardware",
      desc: ["Gunakan GPU Acceleration (seperti NVIDIA CUDA) khusus untuk bagian model BiLSTM agar proses inferensi deep learning menjadi 10x lebih cepat dibanding hanya menggunakan CPU."],
    },
    {
      title: "Penerapan Replikasi Data",
      desc: ["Dalam perancangan arsitektur sistem informasi skala enterprise ini, mekanisme ketahanan data diimplementasikan menggunakan Apache Kafka dengan konfigurasi Replication Factor (RF) minimal 3. Strategi ini menerapkan arsitektur Leader-Follower, di mana setiap partisi data memiliki satu replika utama (Leader) untuk menangani seluruh transaksi, serta dua replika cadangan (Follower) yang secara aktif menyalin data secara real-time. Pendekatan ini dipilih untuk menciptakan redundansi fisik pada lapisan penyimpanan, sehingga menjamin konsistensi dan ketersediaan data yang tinggi di seluruh klaster server.", "Penerapan jumlah replika ini berfungsi vital sebagai mekanisme Fault Tolerance guna memitigasi risiko Single Point of Failure (SPOF). Dengan konfigurasi tersebut, sistem memiliki toleransi terhadap kegagalan infrastruktur; apabila satu node penyimpan data mengalami kerusakan atau downtime, layanan tetap dapat beroperasi normal tanpa kehilangan data karena beban kerja akan dialihkan secara otomatis ke node replika yang tersedia. Hal ini memastikan kontinuitas layanan (business continuity) dan integritas data tetap terjaga meskipun terjadi gangguan pada salah satu elemen perangkat keras.", "Di dalam Apache Kafka, pastikan jumlah replika minimal 3. Rekomendasi ini bertujuan untuk menjaga Fault Tolerance; jika satu node penyimpan data rusak, data tetap aman di node lain."],
    },
    {
      title: "Monitoring Latensi",
      desc: ["Implementasi pemantauan latensi (latency monitoring) berfokus pada pengukuran presisi waktu yang dibutuhkan data untuk mengalir dari tahap penyangga (buffer) di Apache Kafka hingga masuk ke tahap pemrosesan di Apache Spark. Dalam arsitektur ini, Prometheus berfungsi sebagai pengumpul metrik kinerja backend—seperti consumer lag atau selisih offset pesan—secara berkala, sementara Grafana berperan memvisualisasikan data metrik tersebut ke dalam dashboard grafik yang intuitif. Integrasi kedua alat ini memberikan visibilitas penuh terhadap kesehatan aliran data (data stream), memungkinkan pengamatan granular terhadap seberapa cepat sistem dapat memproses beban kerja yang masuk.", "Tujuan strategis dari pemantauan ini adalah untuk mendeteksi dan mengisolasi simpul penghambat (bottleneck) yang berpotensi menurunkan performa sistem secara keseluruhan. Dengan memantau tren latensi secara real-time, anomali seperti lonjakan waktu tunggu antrean dapat segera diidentifikasi, yang biasanya menandakan ketidakseimbangan antara kecepatan produksi data di Kafka dan kecepatan konsumsi di Spark. Informasi ini sangat krusial sebagai dasar pengambilan keputusan teknis, seperti penambahan sumber daya komputasi (scaling out) atau penyesuaian konfigurasi paralelisme, guna menjaga stabilitas dan throughput sistem agar tetap optimal.", "Implementasikan alat monitoring seperti Prometheus atau Grafana untuk memantau waktu perjalanan data dari Kafka ke Spark, guna memastikan tidak ada simpul yang menjadi penghambat (bottleneck)."],
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

            <div className={classNames("flex", "flex-col", "gap-2")}>
              {item.desc.map((item, j) => (
                <p
                  key={`item-${i}-${j}`}
                  className={classNames(
                    "text-sm",
                    "text-gray-300",
                    "leading-relaxed"
                  )}
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Recommendation;
