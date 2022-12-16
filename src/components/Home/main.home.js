import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="mt-10 md:pr-24 md:pl-24">
      <h1 className="font-medium text-2xl md:text-7xl text-white">
        {props.title}
      </h1>
      <p className="text-xs md:text-base text-gray-400 pt-3">
        {props.description}
      </p>
      <NavLink to="/chatgpt">
        <button
          type="button"
          class="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition ease-in-out delay-150 bg-indigo-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 text-white"
        >
          Let's Go
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
