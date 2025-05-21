import { test, expect } from "@playwright/test";

test("flujo completo del formulario", async ({ page }) => {
  await page.goto("http://localhost:3000/form");

  // Paso 1: Raza (select nativo)
  await page.waitForSelector('[data-testid="breed-select"]');
  await page.selectOption('[data-testid="breed-select"]', "Akita");
  await page.click('button:has-text("Siguiente")');
  await expect(
    page.locator('input[placeholder="Mi perro se llama..."]')
  ).toBeVisible();

  // Paso 2: Nombre
  await page.fill('input[placeholder="Mi perro se llama..."]', "Firulais");
  await page.click('button:has-text("Siguiente")');
  await expect(page.locator("text=Edad")).toBeVisible();

  // Paso 3: Edad
  await page.fill('input[placeholder="0"]', "3");
  await page.click('button:has-text("Siguiente")');
  await expect(page.locator('input[placeholder="0"]')).toBeVisible();

  // Paso 4: Peso
  const weightInput = page.locator('input[type="number"]');
  await weightInput.fill("12");
  const nextButton = page.getByRole("button", { name: "Siguiente" });
  await expect(nextButton).toBeEnabled();
  // Haz clic
  await nextButton.click();
  // Paso 5: asegúrate de que carga el texto del siguiente paso
  await expect(
    page.locator("text=¿Qué dieta crees que le irá mejor")
  ).toBeVisible();

  // Paso 5: seleccionar dieta
  await page.selectOption(
    '[data-testid="diet-goal-select"]',
    "Pérdida de peso"
  );
  await page.click('button:has-text("Siguiente")');

  // Paso 6: Preferencias de comida
  await expect(page.locator("text=¿Cómo se comporta")).toBeVisible();
  await page.getByText("Glotón: devora todo").click();
  await page.getByRole("button", { name: "Siguiente" }).click();

  // Paso 7: Actividad (similar si usas BaseSelect también aquí)
  await page.selectOption('[data-testid="activity-level-select"]', "Alto");
  await page.click('button:has-text("Siguiente")');

  await page.screenshot({ path: "after-activity.png" });

  // Paso 8: Resumen
  await expect(page.locator("text=Firulais")).toBeVisible();
  await expect(page.locator("text=3")).toBeVisible();
  await expect(page.locator("text=12")).toBeVisible();
  await expect(page.locator("text=Pérdida de peso")).toBeVisible();
  await expect(page.locator("text=gloton")).toBeVisible();
  await expect(page.locator("text=Alto")).toBeVisible();
  await expect(page.locator("text=Grupo")).toBeVisible();

  await page.click('button:has-text("Enviar")');
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page.locator('[data-testid="success-message"]')).toHaveText(
    "Formulario enviado con éxito!"
  );
  await page.screenshot({ path: "after-Resume.png" });
});
