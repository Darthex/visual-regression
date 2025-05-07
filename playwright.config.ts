import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: '/.tests',
  snapshotDir: './.snapshots',
  use: {
    baseURL: 'http://localhost:6006',
  }
})