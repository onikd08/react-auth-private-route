import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid min-h-[calc(100vh-68px)] px-4 bg-white place-content-center dark:bg-gray-900">
        <h1 className="tracking-widest text-gray-500 uppercase dark:text-gray-400">
          404 | Not Found
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
