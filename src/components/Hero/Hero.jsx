const Hero = () => {
  {
    const arr = [2, 3, 4, 5, 6, 7];
    arr[10] = 100;
    console.log(arr);
  }
  return (
    <div className="md:mb-24 mb-16">
      <div
        className="md:rounded-3xl rounded-xl bg-cover md:bg-[100%_auto] bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, #150b2b, rgba(21, 11, 43, 0)), url(https://i.ibb.co.com/9TJfyqm/banner.jpg)",
        }}
      >
        <div className="text-center text-white py-4 md:py-[8.125rem] px-4">
          <h1 className="md:text-[3.25rem] text-2xl font-bold leading-normal mb-3 md:mb-6">
            Discover an exceptional cooking <br className="md:block hidden" />
            Class tailored for you!
          </h1>

          <p className="md:text-lg leading-[1.67] mb-5 md:mb-10 max-w-4xl mx-auto">
            Discover a culinary adventure tailored just for you. Our cooking
            classes offer a unique and immersive experience, perfect for
            beginners and seasoned cooks alike.
          </p>

          <div className="md:flex-row flex flex-col items-center justify-center gap-6">
            <button className=" md:text-xl md:px-8 md:py-5 px-4 py-2.5 font-semibold text-[#150b2b] bg-[#0be58a] border border-[#0be58a] rounded-full ">
              Explore Now
            </button>

            <button className=" md:text-xl md:px-8 md:py-5 py-2.5 min-w-[8.5rem]  font-semibold text-white bg-transparent border border-white rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
