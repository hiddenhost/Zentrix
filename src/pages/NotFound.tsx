import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Attempted access to:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden text-white px-4">
      {/* Animated SVG Blobs */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] opacity-30 animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b82f6"
            d="M38.2,-58.2C49.4,-49.1,58.2,-38.2,63.1,-25.8C68,-13.3,69.1,0.6,64.7,13.6C60.3,26.7,50.4,38.8,38.2,47.6C26,56.5,13,62.1,-1.6,64.2C-16.3,66.3,-32.5,64.9,-42.3,56.1C-52.1,47.4,-55.6,31.3,-59.1,15.5C-62.6,-0.2,-66,-15.7,-60.1,-28.5C-54.1,-41.2,-38.7,-51.2,-23.2,-58.2C-7.7,-65.3,7.8,-69.3,22.6,-65.4C37.4,-61.4,52.6,-49.7,38.2,-58.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute bottom-[-25%] right-[-15%] w-[500px] h-[500px] opacity-20 animate-spin-slow"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0ea5e9"
            d="M38.4,-52.6C51.3,-44.1,63,-32.1,66.3,-18.1C69.6,-4.2,64.5,11.7,56.4,25.4C48.3,39.1,37.1,50.7,23.6,56.2C10.2,61.7,-5.6,61.2,-19.4,55.2C-33.1,49.2,-44.7,37.8,-52.6,23.8C-60.6,9.7,-64.8,-7.1,-60.6,-21.2C-56.4,-35.4,-43.8,-47,-29.4,-55.3C-15,-63.7,1.2,-68.9,16.2,-65.2C31.2,-61.4,45.6,-48.1,38.4,-52.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Error Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-10 text-center max-w-md w-full"
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle size={56} className="text-yellow-400 animate-bounce" />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight text-white">
          404
        </h1>
        <p className="text-lg text-slate-300 mb-6">
          This page could not be found.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
        >
          Return to Dashboard
        </Link>
        <p className="text-xs text-slate-500 mt-4">
  Need help?{" "}
  <Link
    to="/contact-us"
    className="text-blue-400 hover:text-blue-500 underline"
  >
    Contact support
  </Link>
</p>

      </motion.div>
    </div>
  );
};

export default NotFound;
