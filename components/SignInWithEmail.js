
export default function SignInWithEmail ()  {
    return (
        <div className="">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
                <div className="m-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 ">Your email</label>
                    <input type="email" id="email" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="name@ .com" required>
                    </input>
                </div>
                <div className="m-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Your password</label>
                    <input type="password" id="password" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="******" required>
                    </input>
                </div>
                <div className="m-4">
                    <button type="submit" className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>

            </form>
        </div>
    )
}


