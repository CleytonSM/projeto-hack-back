-- CreateTable
CREATE TABLE `Instituicoes` (
    `id` VARCHAR(191) NOT NULL,
    `razao_social` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `perfil_empresarial` ENUM('instituicao_publica', 'eco_friendly', 'inclusao_social', 'restauracao_ambiental') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
