
import { openai } from './openaiClient';

export async function generateTests(endpoint: string) {
  const prompt = `
  Generate API test cases for ${endpoint}.
  Return JSON array: [{method,url,body,expectedStatus}]
  `;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }]
  });

  return res.choices[0].message.content;
}
