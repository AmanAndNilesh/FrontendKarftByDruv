import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 font-inter">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 shadow-lg rounded-r-lg">
        {/* Sidebar Brand/Logo */}
        <div className="mb-8 text-center">
          <Link to="/dashboard" className="text-white text-3xl font-extrabold hover:text-blue-400 transition-colors duration-300">
            MyDashboard
          </Link>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex-grow">
          <ul className="space-y-3">
            <li>
              <Link
                to="/dashboard" // Assuming '/' or '/dashboard' is the main dashboard route
                className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                {/* You can add icons here, e.g., using Lucide React or Font Awesome */}
                <span className="mr-3">🏠</span> Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                <span className="mr-3">👤</span> Profile
              </Link>
            </li>
            <li>
              <Link
                to="/inventory"
                className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                <span className="mr-3">📦</span> Inventory
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                <span className="mr-3">📋</span> Orders
              </Link>
            </li>
            <li>
              <Link
                to="/payments"
                className="flex items-center px-4 py-2 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                <span className="mr-3">💳</span> Payments
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar (can be used for user info, search, notifications, etc.) */}
        <header className="bg-white p-4 shadow-md flex justify-between items-center rounded-bl-lg">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
          {/* Example: User profile icon or notification bell */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, User!</span>
            {/* <img src="user-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" /> */}
          </div>
        </header>

        {/* Actual Dashboard Content */}
        <main className="flex-grow p-8 overflow-auto"> {/* Added overflow-auto for scrollability */}
          <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Dashboard Content</h2>
            <p className="text-gray-600 text-lg mb-8">
              This is the main content area for your dashboard. It will adapt to the remaining space
              next to the sidebar.
            </p>

            {/* Placeholder for more dashboard content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Recent Activity</h3>
                <p className="text-gray-700">Display recent user actions or system events here. This card demonstrates a typical dashboard widget.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Quick Stats</h3>
                <p className="text-gray-700">Show key performance indicators at a glance, such as sales figures or inventory levels.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-700 mb-2">Notifications</h3>
                <p className="text-gray-700">Alert users to important updates or tasks requiring their attention.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Analytics Summary</h3>
                <p className="text-gray-700">Provide a high-level summary of analytics data, e.g., website traffic or user engagement.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-red-200">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Critical Alerts</h3>
                <p className="text-gray-700">Highlight any critical issues or warnings that need immediate attention.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Task List</h3>
                <p className="text-gray-700">A simple list of pending tasks or to-do items for the user.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;