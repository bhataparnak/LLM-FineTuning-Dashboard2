"use client";
import NavBar from './NavBar';
import Sidebar from './SideBar';

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <NavBar />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}