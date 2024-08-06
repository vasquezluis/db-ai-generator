import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Structura/)
})

test('navbar has the Structura text', async ({ page }) => {
	await page.goto('/')

	const StructuraText = await page.textContent('nav span')

	expect(StructuraText).toContain('Structura')
})

test('api key button shows api key pop up', async ({ page }) => {
	await page.goto('/')

	const ApiKeyButton = page.getByText(/API Key/)

	await ApiKeyButton.click()

	const PopUpTitle = page.getByText('OpenAI API Key')

	expect(PopUpTitle).toBeDefined()
})

test('close button close api key pop up', async ({ page }) => {
	await page.goto('/')

	const ApiKeyButton = page.getByText(/API Key/)
	await ApiKeyButton.click()

	const PopUpTitle = await page.waitForSelector('text=OpenAI API Key')
	expect(PopUpTitle).toBeTruthy()

	const CloseButton = page.getByText('Close')
	await CloseButton.click()

	await page.waitForSelector('text=OpenAI API Key', { state: 'hidden' })

	const PopUpHidden = await page.$('text=OpenAI API Key')
	expect(PopUpHidden).toBeNull()
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
