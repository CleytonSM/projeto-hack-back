-- CreateTable
CREATE TABLE `Certificados` (
    `id` VARCHAR(191) NOT NULL,
    `tipo` ENUM('eventos_sustentaveis_1', 'eventos_sustentaveis_5', 'eventos_sustentaveis_10') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CertificadosXInstituicoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_instituicao` VARCHAR(191) NOT NULL,
    `id_certificado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CertificadosXInstituicoes` ADD CONSTRAINT `CertificadosXInstituicoes_id_instituicao_fkey` FOREIGN KEY (`id_instituicao`) REFERENCES `Instituicoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CertificadosXInstituicoes` ADD CONSTRAINT `CertificadosXInstituicoes_id_certificado_fkey` FOREIGN KEY (`id_certificado`) REFERENCES `Certificados`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
