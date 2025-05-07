"use client";
import { Check, ExternalLink, Download, Share2 } from 'lucide-react';

export default function ModelCard({ model }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden card-hover transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">{model.name}</h3>
            <p className="text-sm text-gray-500">Base: {model.baseModel}</p>
          </div>
          <div className="flex-shrink-0">
            {model.deployedToDify ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Check className="mr-1 h-3 w-3" /> Deployed
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Not Deployed
              </span>
            )}
          </div>
        </div>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{model.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500">LOSS</p>
            <p className="text-lg font-semibold">{model.metrics.loss.toFixed(3)}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">ACCURACY</p>
            <p className="text-lg font-semibold">{model.metrics.accuracy.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-xs text-gray-500">
            <div>Created {model.created}</div>
            <div>From job: {model.fineTuningJob}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 flex justify-between">
        <button className="text-gray-500 hover:text-gray-700">
          <Share2 className="h-4 w-4" />
        </button>
        <button className="text-blue-600 hover:text-blue-800 flex items-center">
          {model.deployedToDify ? (
            <>
              <ExternalLink className="h-4 w-4 mr-1" /> View in Dify
            </>
          ) : (
            <>
              <ExternalLink className="h-4 w-4 mr-1" /> Deploy to Dify
            </>
          )}
        </button>
      </div>
    </div>
  );
}