import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register'); 
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

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
          <button
            type="button"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <button
              onClick={handleRegister}
              className="text-blue-500 hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
