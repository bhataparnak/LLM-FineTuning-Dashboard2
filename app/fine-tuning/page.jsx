import DashboardLayout from '../components/DashboardLayout';
import FineTuningForm from '../components/FineTuningForm';
import { Cpu, RefreshCw, AlertCircle, Play, Pause, CheckCircle, XCircle } from 'lucide-react';

export default function FineTuning() {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Fine-tuning</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh Status
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-4">Create Fine-tuning Job</h2>
                <FineTuningForm />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Recent Jobs</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Model</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: 1, name: 'Customer Support Bot', baseModel: 'H2O-Llama-3-8B', status: 'Completed', progress: '100%', created: '2 days ago' },
                      { id: 2, name: 'Technical Documentation', baseModel: 'H2O-Mistral-7B', status: 'In progress', progress: '67%', created: '1 day ago' },
                      { id: 3, name: 'Legal Text Generator', baseModel: 'H2O-Llama-3-8B', status: 'Queued', progress: '0%', created: '12 hours ago' },
                      { id: 4, name: 'Medical QA System', baseModel: 'H2O-Llama-3-70B', status: 'Failed', progress: '23%', created: '3 days ago' },
                    ].map((job) => (
                      <tr key={job.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
                              <Cpu className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{job.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{job.baseModel}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                            job.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            job.status === 'In progress' ? 'bg-blue-100 text-blue-800' : 
                            job.status === 'Queued' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                job.status === 'Completed' ? 'bg-green-600' : 
                                job.status === 'In progress' ? 'bg-blue-600' : 
                                job.status === 'Queued' ? 'bg-yellow-600' :
                                'bg-red-600'
                              }`} 
                              style={{ width: job.progress }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{job.progress}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {job.created}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {job.status === 'In progress' && (
                            <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                              <Pause className="h-4 w-4" />
                            </button>
                          )}
                          {job.status === 'Queued' && (
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              <Play className="h-4 w-4" />
                            </button>
                          )}
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Job Status</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Active Jobs</div>
                    <div className="text-sm font-medium text-gray-900">1/5</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Queued Jobs</div>
                    <div className="text-sm font-medium text-gray-900">1</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Completed Jobs</div>
                    <div className="text-sm font-medium text-gray-900">12</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Failed Jobs</div>
                    <div className="text-sm font-medium text-gray-900">2</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Integration Status</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="text-sm font-medium text-gray-900">H2O.ai LLM Studio</h3>
                    </div>
                    <div className="ml-7 text-xs text-gray-500">Connected and operational</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="text-sm font-medium text-gray-900">Dify.ai API</h3>
                    </div>
                    <div className="ml-7 text-xs text-gray-500">Connected and operational</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Tips</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>For best results with H2O.ai LLM Studio, ensure your training dataset is well-balanced and properly formatted.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
