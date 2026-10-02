export type FailureContext = {
  testTitle: string;
  errorMessage: string;
  expected?: string;
  actual?: string;
};

export function buildFailureAnalysisPrompt(context: FailureContext): string {
  return [
    'You are a senior quality engineer performing failure triage.',
    'Analyze the failure without inventing facts.',
    'Return: probable category, evidence, next debugging steps, and a concise bug summary.',
    '',
    `Test: ${context.testTitle}`,
    `Error: ${context.errorMessage}`,
    `Expected: ${context.expected ?? 'not supplied'}`,
    `Actual: ${context.actual ?? 'not supplied'}`
  ].join('\n');
}
