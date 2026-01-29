
export function createBug(test: any, response: any) {
  return `
BUG REPORT
Request: ${JSON.stringify(test)}
Response: ${JSON.stringify(response)}
  `;
}
