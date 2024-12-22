import pic1 from "/images/pic1.jpg";

function Content() {
  return (
    <div className="p-16 bg-slate-200">
      <div className="flex flex-row items-center justify-between space-x-10">
        <img
          src={pic1}
          className="w-1/2 h-auto object-cover flex-shrink-0"
          alt="Descriptive Image"
        />

        <div className="flex flex-col space-y-6 px-6">
          <p className="text-5xl font-[Oswald] font-medium tracking-widest">
            How to start my photography journey?
          </p>
          <p className="text-lg font-[Poppins] font-light text-justify">
            To begin your photography journey, start by exploring different
            subjects and styles. Use the equipment you have, even a smartphone,
            and focus on learning the basics— composition, lighting, and angles.
            Practice regularly to improve your skills, and study professional
            work for inspiration. As you grow, invest in a camera and join
            photography communities for feedback. Embrace mistakes as learning
            opportunities. With passion and persistence, photography can evolve
            from a hobby into a rewarding creative pursuit.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
