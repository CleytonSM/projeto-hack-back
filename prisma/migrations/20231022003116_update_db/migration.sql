/*
  Warnings:

  - You are about to drop the column `cidade` on the `Enderecos` table. All the data in the column will be lost.
  - Added the required column `id_cidade` to the `Enderecos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Enderecos` DROP COLUMN `cidade`,
    ADD COLUMN `id_cidade` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Cidades` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_id_cidade_fkey` FOREIGN KEY (`id_cidade`) REFERENCES `Cidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
