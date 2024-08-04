import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">...Oops!</h1>
      <h3 className="text-2xl mt-4 text-gray-700">Something Went Wrong!</h3>
      <h3 className="text-lg mt-2 text-gray-600">
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
