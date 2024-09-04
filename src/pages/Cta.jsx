/* eslint-disable react/no-unescaped-entities */
const Cta = () => {
  return (
    <>
    <div className="relative mx-auto my-10 flex max-w-md flex-col justify-between  px-10 lg:max-w-screen-lg lg:flex-row shadow-orange-50 mb-10">
        <div className="bg-slate-100 absolute left-0 h-full w-full lg:w-5/6 rounded-md border border-blue-200"></div>
        <div className="relative py-10 ">
          <span className="rounded-full bg-blue-200 px-2 py-1 text-xs text-blue-500">
            NEW
          </span>
          <h2 className="text-slate-900 text-3xl font-bold lg:text-5xl">
            Purpose-Build for Businesses{" "}
          </h2>
          <p className="text-slate-700 mt-4 max-w-lg">
            Exceeeded Netsec is Different . We designed our products from the
            ground up to be automated , lightweight , and easy to use , so you
            don't have to dedicate tons of resources to cybersecurity alone.{" "}
            <span className="font-extrabold">
              That's part of how Exceeded Netsec helps business grow and thrive.
            </span>
          </p>
        </div>
        <div className="relative h-72 lg:w-72">
          <div className="bg-slate-50 shadow-slate-200 absolute h-56 w-56 translate-x-6 translate-y-6 rounded-2xl shadow-lg backdrop-blur-lg lg:h-60 lg:w-60"></div>
          <div className="shadow-slate-200 absolute flex h-56 w-56 translate-x-3 translate-y-3 flex-col items-center justify-center rounded-2xl bg-white shadow backdrop-blur-lg lg:h-60 lg:w-60">
            <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-dashed">
              <p className="text-center text-5xl font-bold text-[#79df13] lg:text-6xl">
                30+
              </p>
              <span className="text-center text-xs uppercase leading-4 text-blue-500">
                Superior <br />
                Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
          <div className="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
          <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
          <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
              Key Benefits <br className="sm:hidden" />
              of Secure Networking
            </h2>
            <hr className="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
          </div>

          <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
            <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p className="relative text-5xl font-black text-[#79df13]">2x</p>
              <p className="relative mt-5 text-gray-600">
                Increase in productivity of security and network teams{" "}
              </p>
            </div>

            <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p className="relative text-5xl font-black text-[#79df13]">218%</p>
              <p className="relative mt-5 text-gray-600">
                Return on investment <br /> Prevention on security infratructure
              </p>
            </div>

            <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p className="relative m-0 text-5xl font-black text-[#79df13]">63+</p>
              <p className="relative mt-5 text-gray-600">
                Empowering Success for Over 63+ Thriving Clients Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Cta