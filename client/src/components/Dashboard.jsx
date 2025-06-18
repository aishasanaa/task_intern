import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 to-blue-400 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-8 rounded-xl shadow-2xl w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800 dark:text-blue-300">
          Dashboard
        </h1>
        <p className="text-center text-lg mb-6">
          Welcome to your dashboard! You are now logged in.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
