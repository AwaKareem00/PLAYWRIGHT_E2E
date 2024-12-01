import { test as base } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";
import { LoginPage } from "../pages/LoginPage";
import { BasePage } from "../pages/BasePage";
import { WaitsPage } from "../pages/WaitsPage";

type MyFixtures = { 
  basePage: BasePage
  todoPage: TodoPage,
  loginPage: LoginPage
  waitsPage: WaitsPage
};

// Extend the Playwright test runner to create your custom fixtures
export const test = base.extend<MyFixtures>({

  basePage: async({page}, use) => {
    const basePage = new BasePage(page)
    await use(basePage)
  },
  loginPage: async({page}, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },
  todoPage: async({page}, use) => {
    const todoPage = new TodoPage(page)
    await use(todoPage)
  },
  waitsPage: async({page}, use) => {
    const waitsPage = new WaitsPage(page)
    await use(waitsPage)
  },
})

export { expect } from '@playwright/test'