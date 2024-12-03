import { test } from "@playwright/test";

test.describe("Mach 3 invalid login", async () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://techglobal-training.com/frontend/project-2");
          });

          test('Validate the invalid login error message', async ({ page }) => {
            
            const user = page.locator('#username');
            await user.fill('TechGlobal');
        
            const pass = page.locator('#password');
            await pass.fill('Test1234');
        
            const login = page.locator('#login_btn');
            await login.click();
          });
  });