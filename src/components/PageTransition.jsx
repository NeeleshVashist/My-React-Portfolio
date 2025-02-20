import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.5, ease: "easeIn" } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {children}
    </motion.div>
  );
};
PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
