import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="container mx-auto px-4 py-24 flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            LLM Fine-tuning Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A powerful interface for fine-tuning language models using H2O.ai LLM Studio
            integrated with Dify.ai for seamless deployment.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center font-medium">
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/models" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium">
              Browse Models
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Upload Data</h3>
            <p className="text-gray-600">Import and manage training datasets in multiple formats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Fine-tune Models</h3>
            <p className="text-gray-600">Configure and run fine-tuning jobs with H2O.ai LLM Studio.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Deploy to Production</h3>
            <p className="text-gray-600">Seamlessly deploy fine-tuned models using Dify.ai APIs.</p>
          </div>
        </div>
      </main>
    </div>
  );
}