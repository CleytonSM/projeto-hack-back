-- CreateTable
CREATE TABLE `Enderecos` (
    `id` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `id_ponto_cultural` VARCHAR(191) NULL,
    `id_evento` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PontosCulturais` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `importancia` VARCHAR(191) NOT NULL,
    `referencia` VARCHAR(191) NOT NULL,
    `hora_inicio` VARCHAR(191) NOT NULL,
    `hora_fim` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `id_endereco` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eventos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `como_participar` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `hora_inicio` VARCHAR(191) NOT NULL,
    `hora_fim` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `ingresso_social` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `id_endereco` VARCHAR(191) NOT NULL,
    `id_instituicao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PontosCulturais` ADD CONSTRAINT `PontosCulturais_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Enderecos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_id_instituicao_fkey` FOREIGN KEY (`id_instituicao`) REFERENCES `Instituicoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Enderecos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
