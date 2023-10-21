/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Instituicoes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Instituicoes` ADD COLUMN `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `Usuarios` ADD COLUMN `status` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `Instituicoes_email_key` ON `Instituicoes`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_email_key` ON `Usuarios`(`email`);
