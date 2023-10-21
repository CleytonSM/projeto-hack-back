/*
  Warnings:

  - Added the required column `como_preservar` to the `PontosCulturais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PontosCulturais` ADD COLUMN `como_preservar` VARCHAR(191) NOT NULL;
