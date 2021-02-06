import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import AlertMessage from "../../assets/components/AlertMessage";
import { Loader } from "../../assets/components/Loader";
import { pageVariants, pageTransition } from "../../assets/animationVariants";

export default function ContentContainer({ children, movies }) {
  const loading = useSelector((state) => state.app.loading);
  const totalPages = useSelector((state) => state.app.totalPages);
  const isError = useSelector((state) => state.app.isError);

  if (loading) {
    return <Loader />;
  }

  if (!movies) {
    return (
      <AlertMessage
        primaryText="No empty strings!"
        secondaryText="Please, specify a query to search."
      />
    );
  }

  if (!totalPages) {
    return (
      <AlertMessage
        primaryText="Not Found"
        secondaryText="Try to search for something else."
      />
    );
  }

  if (isError) {
    return (
      <AlertMessage
        primaryText="An error occurred"
        secondaryText="Must be an API error, check back later."
      />
    );
  }

  if (movies)
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    );
}
