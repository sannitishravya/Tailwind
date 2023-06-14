import { URL } from "./utils/constants";
const UpgradLogin = () => {
  return (
    <div class="w-full max-w-lg m-4">
      <div className="flex justify-between">
        <img src={URL} alt="imagej" />
        <div className="ml-28 mt-8">
          <h2 className="text-black-500 font-bold ">
            Welcome! Sign up or Login to your account{" "}
          </h2>
          <div className="flex justify-around">
            <button className="bg-transaparent  mt-2 p-2">+91</button>
            <input
              placeholder="Mobile Number"
              className=" rounded mt-2 p-3"
            ></input>
          </div>
          <button className="bg-gray-300 rounded my-4 ml-4 p-2 pl-20 pr-20">
            Continue
          </button>
          <a
            href="www.google.com"
            className="underline text-gray-400  font-bold ml-11 "
          >
            Proceed with Email
          </a>
          <div className="mt-4 text-black font-semibold">
            <div className="flex justify-between">
              <h2>Have a referal code</h2>
              <div>
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"></input>
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpgradLogin;
