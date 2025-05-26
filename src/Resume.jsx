import React, { useEffect, useState, useRef } from 'react';
import resumePDF from './assets/JinadStefanCV.pdf';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSpinner, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const objectRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Fallback
    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => setLoading(false);

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="text-white hover:text-teal-400 flex items-center mb-8">
          <FaArrowLeft className="mr-2" /> Back Home
        </Link>

        {/* PDF Viewer */}
        <div className="relative border border-gray-700 rounded-lg overflow-hidden h-[800px] bg-white">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
              <FaSpinner className="animate-spin text-white text-3xl mr-3" />
              <span className="text-white text-lg">Loading Resume...</span>
            </div>
          )}
          <object
            data={resumePDF}
            type="application/pdf"
            width="100%"
            height="100%"
            onLoad={handleLoad}
            ref={objectRef}
          >
            <div className="p-6 bg-gray-900 text-white text-center">
              <p className="mb-2">PDF preview is not available in your browser.</p>
              <a
                href={resumePDF}
                download="JinadStefan_Resume.pdf"
                className="text-teal-400 underline hover:text-teal-300 transition"
              >
                Download Resume
              </a>
            </div>
          </object>
        </div>

        {/* Download Button */}
        <div className="mt-6 text-center">
          <a
            href={resumePDF}
            download="JinadStefan_Resume.pdf"
            className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;










