// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const Abstract = () => {
  return (
    <motion.section
      id="abstract"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={classNames(
        "px-5",
        "py-24",
        "mx-auto",
        "container",
        "text-white"
      )}
    >
      <motion.div variants={itemVariants} className={classNames("mb-12")}>
        <h2 className={classNames("text-4xl", "font-bold")}>Abstrak</h2>
        <div className={classNames("mt-2", "h-1", "w-20", "bg-cyan-300")} />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={classNames(
          "grid",
          "gap-8",
          "grid-cols-1",
          "lg:grid-cols-2",
          "text-gray-300"
        )}
      >
        <p>
          Laporan ini mengkaji BankNet, sebuah sistem analitik big data mutakhir
          yang dirancang untuk mengamankan transaksi perbankan internet secara
          real-time. Tantangan utama dalam perbankan modern adalah memproses
          volume data yang sangat besar dengan kecepatan tinggi tanpa
          mengorbankan akurasi deteksi penipuan (fraud).
        </p>
        <p>
          Dengan mengintegrasikan Apache Kafka untuk penyerapan data
          terdistribusi dan Apache Spark untuk pemrosesan paralel, BankNet mampu
          menangani laju data hingga 1000 Mbps dengan latensi minimal (45ms).
          Penggunaan model BiLSTM memberikan akurasi deteksi sebesar 98,5%.
          Studi kasus ini membuktikan bahwa komputasi paralel adalah kunci dalam
          menangani sistem informasi skala enterprise.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Abstract;
