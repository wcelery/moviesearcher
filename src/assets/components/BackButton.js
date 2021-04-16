import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { backVariants } from "../animationVariants";
import { ReactComponent as BackSvg } from "../../assets/svg/back.svg";

export function BackButton() {
  return (
    <motion.div
      className="back-btn-container"
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={{ y: -2 }}
      variants={backVariants}
    >
      <Link to="/" className="back-btn">
        <BackSvg className="svg-filter-grey" />
        <span>back</span>
      </Link>
    </motion.div>
  );
}
