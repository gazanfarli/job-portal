import HeroImage from "../../../assets/about-us-banner.jpg";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Empowering Your Journey to Success
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are dedicated to providing innovative solutions that drive
            progress and help you achieve your goals. Our team blends passion,
            expertise, and cutting-edge technology to turn challenges into
            opportunities.
          </p>
          <p className="mt-2 text-gray-600 text-lg">
            Join us on a transformative journey where creativity meets
            excellence and every step is a leap toward a brighter future.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={HeroImage}
            alt="Teamwork and Innovation"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
