import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { Database, Cpu, Monitor, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Datasets</h3>
                <p className="text-3xl font-semibold">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Cpu className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Fine-tuning Jobs</h3>
                <p className="text-3xl font-semibold">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Models</h3>
                <p className="text-3xl font-semibold">5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Active Jobs</h3>
                <p className="text-3xl font-semibold">2</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 font-medium">Recent Fine-tuning Jobs</div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Customer Support Bot', status: 'Completed', time: '2 hours ago' },
                  { name: 'Technical Documentation Assistant', status: 'In progress', time: '5 hours ago' }, 
                  { name: 'Legal Document Summarizer', status: 'Failed', time: '1 day ago' },
                  { name: 'Medical QA System', status: 'Completed', time: '3 days ago' },
                ].map((job, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium">{job.name}</div>
                      <div className="text-sm text-gray-500">{job.time}</div>
                    </div>
                    <div>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        job.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        job.status === 'In progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/fine-tuning" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View all jobs →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 font-medium">Recent Models</div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'support-agent-v2', baseModel: 'H2O-Llama-3-8B', created: '1 day ago' },
                  { name: 'code-explainer-v1', baseModel: 'H2O-Mistral-7B', created: '3 days ago' },
                  { name: 'legal-assistant', baseModel: 'H2O-Llama-3-8B', created: '1 week ago' },
                  { name: 'medical-qa-model', baseModel: 'H2O-Llama-3-70B', created: '2 weeks ago' },
                ].map((model, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium">{model.name}</div>
                      <div className="text-sm text-gray-500">Base: {model.baseModel}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {model.created}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/models" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View all models →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}