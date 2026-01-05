// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const Intro = () => {
  return (
    <motion.section
      id="intro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={classNames(
        "px-5",
        "py-24",
        "mx-auto",
        "container",
        "text-white",
        "scroll-mt-24"
      )}
    >
      <motion.div variants={itemVariants} className={classNames("mb-12")}>
        <h2 className={classNames("text-4xl", "font-bold")}>Pendahuluan</h2>
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
          Pertumbuhan pesat perbankan digital membawa risiko keamanan yang
          semakin kompleks. Sistem keamanan tradisional seringkali gagal karena
          tidak mampu memproses data besar secara instan, menyebabkan
          keterlambatan dalam mendeteksi transaksi mencurigakan.
        </p>
        <p>
          Tujuan dari laporan ini adalah menganalisis bagaimana arsitektur
          paralel dan terdistribusi yang diterapkan dalam BankNet dapat
          menyelesaikan masalah throughput dan latency. Fokus utama terletak
          pada koordinasi antara unit-unit komputasi untuk menghasilkan
          keputusan yang cepat dan akurat dalam hitungan milidetik.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
