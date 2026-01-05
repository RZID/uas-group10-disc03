// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Constants
import {
  itemVariants,
  containerVariants,
  illustrationVariants,
} from "../../constants/variants";

// Assets
import Illustration from "../../assets/images/illustration.svg";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={classNames(
        "px-5",
        "flex",
        "mx-auto",
        "container",
        "min-h-dvh",
        "text-white",
        "items-center"
      )}
    >
      <div
        className={classNames(
          "flex",
          "gap-16",
          "lg:flex-row",
          "items-center",
          "flex-col-reverse"
        )}
      >
        <div className={classNames("max-w-3xl", "space-y-8")}>
          <motion.h3
            variants={itemVariants}
            className={classNames(
              "text-sm",
              "uppercase",
              "text-gray-400",
              "tracking-widest"
            )}
          >
            Studi Kasus Komputasi Paralel
          </motion.h3>

          <motion.h1
            variants={itemVariants}
            className={classNames(
              "text-4xl",
              "font-bold",
              "lg:text-6xl",
              "leading-tight"
            )}
          >
            Analitik Transaksi Real-Time pada{" "}
            <span className={classNames("text-cyan-300")}>
              Sistem Internet Banking
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={classNames("text-gray-300", "max-w-xl")}
          >
            Implementasi pemrosesan paralel dan terdistribusi untuk sistem
            keamanan perbankan skala enterprise menggunakan BankNet.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={classNames("border-l", "border-cyan-400/40", "pl-4")}
          >
            <p className={classNames("text-sm", "text-gray-300")}>
              Ramadhanu · Siwi Forestry · Stefany Imanuel Sihombing
            </p>
          </motion.div>
        </div>

        <motion.img
          variants={illustrationVariants}
          className={classNames("hidden", "lg:block", "w-2/5")}
          src={Illustration}
          alt="Banking Security"
        />
      </div>
    </motion.section>
  );
};

export default Home;
