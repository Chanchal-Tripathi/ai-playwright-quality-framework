import { test } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';

test.describe('Todo UI quality checks', () => {
  test('@smoke user can create a todo', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    await todo.addTodo('Build reliable quality feedback');
    await todo.expectTodoVisible('Build reliable quality feedback');
  });

  test('multiple todos remain visible', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    await todo.addTodo('Validate UI');
    await todo.addTodo('Validate API');
    await todo.expectTodoVisible('Validate UI');
    await todo.expectTodoVisible('Validate API');
  });
});
