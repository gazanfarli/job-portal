import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Job Portal</h2>
            <p className="mt-2">
              Quis enim pellentesque viverra tellus eget malesuada facilisis.
              Congue nibh vivamus aliquet nunc mauris dui nullam et.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/for-candidates" className="hover:text-white">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link to="/for-employers" className="hover:text-white">
                  For Employers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="mb-4">
              Eu nunc pretium vitae platea. Non netus elementum vulputate.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/privacy-policy" className="text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
