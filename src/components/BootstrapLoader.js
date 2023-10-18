import React, { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    // Dynamically create a script element and add it to the document
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script tag when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BootstrapLoader;
