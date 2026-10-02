import { expect, test } from '@playwright/test';
import { buildFailureAnalysisPrompt } from '../../ai/qualityAnalyzer';

test.describe('AI quality guardrails', () => {
  test('failure-analysis prompt requires evidence-based triage', () => {
    const prompt = buildFailureAnalysisPrompt({
      testTitle: 'checkout API returns success',
      errorMessage: 'Expected 201 but received 500',
      expected: 'HTTP 201',
      actual: 'HTTP 500'
    });

    expect(prompt).toContain('without inventing facts');
    expect(prompt).toContain('probable category');
    expect(prompt).toContain('HTTP 500');
  });
});
