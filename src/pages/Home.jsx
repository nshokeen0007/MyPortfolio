import { motion } from "framer-motion";
import profile from "../assets/images/profilephoto.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero container">
      
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm Nikhil Kumar</h1>
        <h3>Full Stack Developer | Node.js | Scalable Backend</h3>
        <p>
          I build scalable backend systems and modern frontend
          applications using React and Node.js.
        </p>

        <Link to="/projects" className="btn">
          View My Work
        </Link>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Nikhil" />
      </motion.div>

    </section>
  );
}