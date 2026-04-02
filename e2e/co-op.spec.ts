import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Green Valley/)
    await expect(page.locator('text=Growing Together').first()).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/products"]')).toBeVisible()
    await expect(page.locator('nav a[href="/events"]')).toBeVisible()
    await expect(page.locator('nav a[href="/about"]')).toBeVisible()
  })
})

test.describe('Member Farms', () => {
  test('listing page shows farms', async ({ page }) => {
    await page.goto('/farms')
    await expect(page.locator('h1')).toContainText('Member Farms')
    await expect(page.getByRole('heading', { name: /Sunrise Acres/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Blue Sky Dairy/ })).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/farms/sunrise-acres')
    await expect(page.getByRole('heading', { name: /Sunrise Acres/ }).first()).toBeVisible()
  })
})

test.describe('Products', () => {
  test('listing page shows products', async ({ page }) => {
    await page.goto('/products')
    await expect(page.locator('h1')).toContainText('Products')
    await expect(page.getByRole('heading', { name: /Heirloom Tomato/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Aged Farmstead/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Wildflower Honey/ })).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/products/heirloom-tomato-medley')
    await expect(page.getByRole('heading', { name: /Heirloom Tomato/ }).first()).toBeVisible()
  })
})

test.describe('Events', () => {
  test('listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.getByRole('heading', { name: /Farmers Market/ })).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/events/summer-farmers-market-2026')
    await expect(page.getByRole('heading', { name: /Farmers Market/ }).first()).toBeVisible()
  })
})

test.describe('News', () => {
  test('listing page shows news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.getByRole('heading', { name: /Organic Certification/ })).toBeVisible()
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/news/organic-certification-expansion')
    await expect(page.getByRole('heading', { name: /Organic Certification/ }).first()).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /Green Valley/ }).first()).toBeVisible()
  })
})
