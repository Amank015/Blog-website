const Contact = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m4-8v16m4-8H8"
                />
              </svg>
              <a
                href="mailto:amankhan.studyinbanmore@gmail.com"
                className="text-gray-700 hover:text-blue-600"
              >
                amankhan.studyinbanmore@gmail.com
              </a>
            </div>
  
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h4l4 8l4-8h4l4"
                />
              </svg>
              <span className="text-gray-700">+91 9301935288</span>
            </div>
  
            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h8v16H4z"
                />
              </svg>
              <a
                href="https://www.linkedin.com/in/aman-khan-129761252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                LinkedIn Profile
              </a>
            </div>
  
            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12m-9 9h3l3-6h6l3 6h3"
                />
              </svg>
              <a
                href="https://github.com/Amank015?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  