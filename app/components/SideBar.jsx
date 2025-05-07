"use client";
import Link from 'next/link';
import { Home, Database, Settings, BarChart2, Users, Monitor } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:bg-gray-800 md:text-white md:h-screen md:fixed">
      <div className="p-4 flex items-center justify-center h-16 border-b border-gray-700">
        <Link href="/dashboard" className="text-xl font-bold text-white">LLM Studio</Link>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <Home className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/datasets" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <Database className="mr-3 h-5 w-5" />
          Datasets
        </Link>
        <Link href="/fine-tuning" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <Settings className="mr-3 h-5 w-5" />
          Fine-tuning
        </Link>
        <Link href="/models" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <Monitor className="mr-3 h-5 w-5" />
          Models
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <BarChart2 className="mr-3 h-5 w-5" />
          Analytics
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <Users className="mr-3 h-5 w-5" />
          Team
        </Link>
      </nav>
    </div>
  );
}