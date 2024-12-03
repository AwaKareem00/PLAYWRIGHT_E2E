import { expect, test } from "@playwright/test";

test.describe("Mach 3 invalid login", async () => {
        test.beforeEach(async ({ page }) => {
            await page.goto("https://techglobal-training.com/frontend/project-2");
          });

          // test('Validate the invalid login error message', async ({ page }) => {
            
          //   const user = page.locator('#username');
          //   await user.fill('TechGlobal');
        
          //   const pass = page.locator('#password');
          //   await pass.fill('1234');
        
          //   const login = page.locator('#login_btn');
          //   await login.click();
        
          //   const alert = page.locator('#error_message');
          //   await expect(alert).toHaveText('Invalid Password entered!');
          // });

        // test('Validate error message for invalid login', async ({ page }) => {
        //     // Step 1: Enter invalid username
        //     await page.fill('#username', 'TechGloball'); // Note: 'TechGloball' instead of 'TechGlobal'
        
        //     // Step 2: Enter invalid password
        //     await page.fill('#password', '1234');
        
        //     // Step 3: Click on the login button
        //     await page.click('#login_btn');
        
        //     // Step 4: Validate the error message
        //     const alert = page.locator('#error_message');
        //     await expect(alert).toHaveText('Invalid Password entered!');
        //   });


          test('Enter the username as "TechGlobal"', async ({ page }) => {
            await page.pause()
            const user = page.locator('#username')
            await user.fill('TechGlobal')

          });

          test('Enter the password as "1234"', async ({ page }) => {
            await page.pause()
            const pass = page.locator('#password')
            await pass.fill('1234')
          });
          
          test('Click on the "LOGIN" button', async ({ page }) => {
            await page.pause()
            const login = page.locator('#login_btn')
            await login.click();
          });

          test('Validate if the failure message displayed as "Invalid Password entered!" above the form', async ({ page }) => {
            await page.pause()
            const alert = page.locator('#error_message')
            await expect(alert).toHaveText('Invalid Password entered!');
          });
  });