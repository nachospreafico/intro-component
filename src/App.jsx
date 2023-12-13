import "./App.css";
import MobileBg from "./assets/bg-intro-mobile.png";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <main
      style={{ backgroundImage: `url(${MobileBg})` }}
      className="relative h-full  w-screen bg-[#FF7979] sm:px-[50px]  lg:px-[110px] py-16 md:grid md:grid-cols-2 flex flex-col gap-[64px]"
    >
      {/* Background img */}

      <Header />
      {/* Button and form container */}
      <div className="px-6 z-10 flex flex-col gap-6 md:justify-center md:items-center">
        <button
          style={{ boxShadow: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)" }}
          className="bg-[#5E54A4] text-white w-full px-16 py-4 rounded-xl"
        >
          <span className="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </button>
        <Form />
      </div>
    </main>
  );
}

export default App;
