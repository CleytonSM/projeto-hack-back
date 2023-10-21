/*
  Warnings:

  - You are about to drop the column `id_endereco` on the `Eventos` table. All the data in the column will be lost.
  - You are about to drop the column `id_endereco` on the `PontosCulturais` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Eventos` DROP FOREIGN KEY `Eventos_id_endereco_fkey`;

-- DropForeignKey
ALTER TABLE `PontosCulturais` DROP FOREIGN KEY `PontosCulturais_id_endereco_fkey`;

-- AlterTable
ALTER TABLE `Enderecos` ADD COLUMN `id_evento` VARCHAR(191) NULL,
    ADD COLUMN `id_ponto_cultural` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Eventos` DROP COLUMN `id_endereco`;

-- AlterTable
ALTER TABLE `PontosCulturais` DROP COLUMN `id_endereco`;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_id_ponto_cultural_fkey` FOREIGN KEY (`id_ponto_cultural`) REFERENCES `PontosCulturais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
