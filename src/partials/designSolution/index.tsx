// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import { containerVariants, itemVariants } from "../../constants/variants";

const DesignSolution = () => {
  const steps = [
    {
      stage: "01",
      title: "Ingesti Data Terdistribusi (Apache Kafka)",
      desc: "Data dari berbagai sumber (mobile, web, ATM) dikirim ke Kafka. Kafka membagi data ini ke dalam Partisi yang didistribusikan ke beberapa broker. Hal ini memungkinkan pengambilan data secara paralel.",
    },
    {
      stage: "02",
      title: "Pemrosesan Paralel (Apache Spark)",
      desc: "Spark berperan sebagai mesin pemroses utama. Spark memecah data besar menjadi blok-blok kecil dan mendistribusikannya ke Worker Nodes. Setiap node mengerjakan tugasnya masing-masing secara bersamaan sebelum hasilnya digabungkan kembali oleh Master Node.",
    },
    {
      stage: "03",
      title: "Inferensi Model Paralel (BiLSTM)",
      desc: "Model BiLSTM memproses urutan data transaksi secara dua arah (maju dan mundur). Dalam lingkungan paralel, proses perhitungan matriks pada model ini dijalankan di atas GPU atau klaster CPU terdistribusi untuk mempercepat waktu prediksi.",
    },
  ];

  return (
    <motion.section
      id="design"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
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
        className={classNames("mb-20", "max-w-2xl")}
      >
        <h2 className={classNames("text-4xl", "font-bold", "leading-tight")}>
          Desain Solusi Paralel & Terdistribusi
        </h2>
        <div className={classNames("mt-4", "h-1", "w-24", "bg-cyan-300")} />
        <p
          className={classNames(
            "mt-6",
            "text-sm",
            "text-gray-400",
            "leading-relaxed"
          )}
        >
          Arsitektur BankNet dirancang sebagai pipeline berlapis yang
          memanfaatkan komputasi paralel untuk mencapai latensi rendah dan
          skalabilitas tinggi.
        </p>
      </motion.div>

      <div
        className={classNames(
          "flex",
          "relative",
          "flex-col",
          "gap-y-16",
          "lg:flex-row",
          "lg:gap-x-12"
        )}
      >
        <div
          className={classNames(
            "h-px",
            "hidden",
            "left-0",
            "top-1/2",
            "right-0",
            "lg:block",
            "absolute",
            "bg-cyan-400/30"
          )}
        />

        {steps.map((step) => (
          <motion.div
            key={step.stage}
            variants={itemVariants}
            className={classNames(
              "p-8",
              "flex",
              "border",
              "gap-y-4",
              "relative",
              "flex-col",
              "lg:w-1/3",
              "rounded-2xl",
              "bg-white/5",
              "backdrop-blur",
              "border-cyan-400/20"
            )}
          >
            <span
              className={classNames(
                "w-8",
                "h-8",
                "flex",
                "-top-4",
                "left-8",
                "text-sm",
                "absolute",
                "font-bold",
                "text-black",
                "rounded-full",
                "items-center",
                "bg-cyan-300",
                "justify-center"
              )}
            >
              {step.stage}
            </span>

            <h3 className={classNames("text-xl", "font-semibold", "mt-4")}>
              {step.title}
            </h3>

            <p
              className={classNames(
                "text-sm",
                "text-gray-300",
                "leading-relaxed"
              )}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DesignSolution;
