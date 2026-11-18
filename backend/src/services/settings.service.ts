import { prisma } from "../lib/prisma.js";

export async function getActiveSettings() {
  const settings = await prisma.setting.findFirst({ orderBy: { updatedAt: "desc" } });
  if (settings) return settings;
  return prisma.setting.create({
    data: { id: 1, minTemperature: 15, maxTemperature: 25, minHumidity: 40, maxHumidity: 60 },
  });
}

export async function updateSettings(input: {
  minTemperature: number;
  maxTemperature: number;
  minHumidity: number;
  maxHumidity: number;
  refreshInterval: number;
}) {
  return prisma.setting.update({
    where: { id: 1 },
    data: input,
  });
}
