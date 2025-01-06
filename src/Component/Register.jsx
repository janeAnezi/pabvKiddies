import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin'); 
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
  };

  return (
    <main className="bg-white">
      <div className="max-w-md mx-auto py-20">
        <h2 className="text-center text-2xl font-semibold">Register</h2>
        <form className="mt-6" onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <button
              onClick={handleSignIn}
              className="text-blue-500 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
