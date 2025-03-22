import PhoneIcon from "../../../assets/icons/PhoneIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import ClockIcon from "../../../assets/icons/ClockIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";

const ContactInfo = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        You Will Grow, You Will Succeed. We Promise That.
      </h1>
      <p className="text-gray-600 text-base sm:text-lg">
        Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus
        tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <li className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 p-2">
            <PhoneIcon />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Call for Inquiry</p>
            <p className="text-gray-700">+257 388-6895</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 p-2">
            <EmailIcon />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Send us Email</p>
            <p className="text-gray-700">kramulous@sbcglobal.net</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 p-2">
            <ClockIcon />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Opening Hours</p>
            <p className="text-gray-700">Mon - Fri: 10AM - 10PM</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 p-2">
            <LocationIcon />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Address</p>
            <p className="text-gray-700">
              19 North Road, Piscataway, NY 08854
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ContactInfo;
