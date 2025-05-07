export async function GET(request) {
    // Mock response for demo
    return Response.json({
      models: [
        { id: 'model-1', name: 'H2O-Llama-3-8B', type: 'Base Model' },
        { id: 'model-2', name: 'H2O-Llama-3-70B', type: 'Base Model' },
        { id: 'model-3', name: 'H2O-Mistral-7B', type: 'Base Model' },
        { id: 'ft-model-1', name: 'support-agent-v2', type: 'Fine-tuned Model' },
        { id: 'ft-model-2', name: 'code-explainer-v1', type: 'Fine-tuned Model' },
      ]
    });
  }
  
  export async function POST(request) {
    const data = await request.json();
    
    // Mock fine-tuning job creation
    return Response.json({
      id: 'job-' + Date.now(),
      status: 'created',
      message: 'Fine-tuning job created successfully'
    });
  }