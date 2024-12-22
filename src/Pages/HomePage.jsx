import pic1 from "/images/pic1.jpg";

const HomePage = () => {
  return (
    <div className="p-8 sm:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10">
        <img
          src={pic1}
          className="w-full sm:w-1/2 h-auto object-cover flex-shrink-0"
          alt="Descriptive Image"
        />

        <div className="flex flex-col space-y-6 px-6">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-[Oswald] font-medium tracking-wide sm:tracking-wider">
            How to start my photography journey?
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-[Poppins] font-light text-justify">
            To begin your photography journey, start by exploring different
            subjects and styles. Use the equipment you have, even a smartphone,
            and focus on learning the basics—composition, lighting, and angles.
            Practice regularly to improve your skills, and study professional
            work for inspiration. As you grow, invest in a camera and join
            photography communities for feedback. Embrace mistakes as learning
            opportunities. With passion and persistence, photography can evolve
            from a hobby into a rewarding creative pursuit.
          </p>
          <button className="btn2">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

