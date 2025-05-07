const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export async function fetchDifyModels() {
  const response = await fetch(`${API_BASE_URL}/dify/models`);
  if (!response.ok) {
    throw new Error('Failed to fetch Dify models');
  }
  return await response.json();
}

export async function fetchH2OModels() {
  const response = await fetch(`${API_BASE_URL}/h2o/models`);
  if (!response.ok) {
    throw new Error('Failed to fetch H2O.ai models');
  }
  return await response.json();
}

export async function createFineTuningJob(jobData) {
  const response = await fetch(`${API_BASE_URL}/h2o/fine-tune`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create fine-tuning job');
  }
  
  return await response.json();
}

export async function deployModelToDify(modelId, difyConfig) {
  const response = await fetch(`${API_BASE_URL}/dify/deploy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      modelId,
      ...difyConfig
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to deploy model to Dify');
  }
  
  return await response.json();
}