// SignIn.jsx
const SignIn = () => {
    return (
      <main className="bg-white">
        <div className="max-w-md mx-auto py-20">
          <h2 className="text-center text-2xl font-semibold">Sign In</h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  };
  
  export default SignIn;
  