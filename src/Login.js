const Login = ()=>{

    return(
        <div class="w-full max-w-xs m-4"> 
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 font-bold" for="userName">User Name </label>
            <input  placeholder="User name" className="mt-2 border rounded h-10 pl-2"></input>
            </div>
            <div className="mb-4">
            <label className="font-bold" for="userName" >Password </label>
            <input placeholder="**************" className="mt-2 block border rounded h-10 pl-2 " type="password"></input>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className=" flex items-center justify-between">
           <button className="bg-blue-700 text-white font-sans p-4 rounded">Signin</button>
           <a className="inline-block align-baseline text-blue-500 font-sans p-4  rounded" href='www.google.com'>Forgot Password</a>
            </div>
        </form>
        <p className= "flex justify-center text-sm text-gray-500">Copyright @2023</p>
        </div>
    )
}

export default Login;