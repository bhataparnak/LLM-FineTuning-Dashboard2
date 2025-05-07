import DashboardLayout from '../components/DashboardLayout';
import ModelCard from '../components/ModelCard';
import { Search, Filter, Monitor } from 'lucide-react';

export default function Models() {
  const models = [
    {
      id: 1,
      name: 'support-agent-v2',
      description: 'Fine-tuned model for customer support tasks with improved response quality.',
      baseModel: 'H2O-Llama-3-8B',
      fineTuningJob: 'Customer Support Bot',
      metrics: {
        loss: 0.078,
        accuracy: 0.92
      },
      created: '2 days ago',
      deployedToDify: true
    },
    {
      id: 2,
      name: 'code-explainer-v1',
      description: 'Specialized in explaining code snippets with detailed comments.',
      baseModel: 'H2O-Mistral-7B',
      fineTuningJob: 'Code Documentation',
      metrics: {
        loss: 0.081,
        accuracy: 0.89
      },
      created: '1 week ago',
      deployedToDify: true
    },
    {
      id: 3,
      name: 'legal-assistant',
      description: 'Trained on legal documents to provide contract analysis and summaries.',
      baseModel: 'H2O-Llama-3-8B',
      fineTuningJob: 'Legal Contract Analysis',
      metrics: {
        loss: 0.095,
        accuracy: 0.87
      },
      created: '2 weeks ago',
      deployedToDify: false
    },
    {
      id: 4,
      name: 'medical-qa-model',
      description: 'Medical terminology expert model for healthcare support.',
      baseModel: 'H2O-Llama-3-70B',
      fineTuningJob: 'Medical QA System',
      metrics: {
        loss: 0.082,
        accuracy: 0.91
      },
      created: '1 month ago',
      deployedToDify: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Fine-tuned Models</h1>
          <div className="flex space-x-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search models..."
              />
            </div>
            <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-50">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}