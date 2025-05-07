"use client";
import { useState } from 'react';

export default function FineTuningForm() {
  const [formData, setFormData] = useState({
    jobName: '',
    baseModel: 'H2O-Llama-3-8B',
    dataset: '',
    epochs: 3,
    batchSize: 8,
    learningRate: 0.00002,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic would go here
    console.log('Submitting form data:', formData);
    alert('Fine-tuning job created! (Demo functionality)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="jobName" className="block text-sm font-medium text-gray-700">
            Job Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="jobName"
              id="jobName"
              value={formData.jobName}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., Customer Support Bot"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="baseModel" className="block text-sm font-medium text-gray-700">
            Base Model
          </label>
          <div className="mt-1">
            <select
              id="baseModel"
              name="baseModel"
              value={formData.baseModel}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="H2O-Llama-3-8B">H2O-Llama-3-8B</option>
              <option value="H2O-Llama-3-70B">H2O-Llama-3-70B</option>
              <option value="H2O-Mistral-7B">H2O-Mistral-7B</option>
              <option value="H2O-GPT-4">H2O-GPT-4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="dataset" className="block text-sm font-medium text-gray-700">
            Dataset
          </label>
          <div className="mt-1">
            <select
              id="dataset"
              name="dataset"
              value={formData.dataset}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="">Select a dataset</option>
              <option value="customer-support">Customer Support QA</option>
              <option value="technical-docs">Technical Documentation</option>
              <option value="legal-contracts">Legal Contract Dataset</option>
              <option value="medical-qa">Medical Terminology</option>
              <option value="code-comments">Code Comments</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="epochs" className="block text-sm font-medium text-gray-700">
            Epochs
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="epochs"
              id="epochs"
              min="1"
              max="10"
              value={formData.epochs}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">Recommended: 3-5</p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="batchSize" className="block text-sm font-medium text-gray-700">
            Batch Size
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="batchSize"
              id="batchSize"
              min="1"
              max="32"
              value={formData.batchSize}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">Recommended: 8-16</p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="learningRate" className="block text-sm font-medium text-gray-700">
            Learning Rate
          </label>
          <div className="mt-1">
            <input
              type="number"
              step="0.00001"
              name="learningRate"
              id="learningRate"
              value={formData.learningRate}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">Recommended: 0.00001-0.0001</p>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description (Optional)
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Brief description of the fine-tuning job..."
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Job
          </button>
        </div>
      </div>
    </form>
  );
}