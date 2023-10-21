-- CreateTable
CREATE TABLE `Usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instituicoes` (
    `id` VARCHAR(191) NOT NULL,
    `razao_social` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `perfil_empresarial` ENUM('instituicao_publica', 'eco_friendly', 'inclusao_social', 'restauracao_ambiental') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Instituicoes_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PontosCulturais` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `importancia` VARCHAR(191) NOT NULL,
    `como_preservar` VARCHAR(191) NULL,
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

-- CreateTable
CREATE TABLE `sustentabilidadeXevento` (
    `id` VARCHAR(191) NOT NULL,
    `id_sustentabilidade` VARCHAR(191) NOT NULL,
    `id_evento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_sustentabilidade` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acessibilidadeXevento` (
    `id` VARCHAR(191) NOT NULL,
    `id_acessibilidade` VARCHAR(191) NOT NULL,
    `id_evento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_acessibilidade` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PontosCulturais` ADD CONSTRAINT `PontosCulturais_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Enderecos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_id_instituicao_fkey` FOREIGN KEY (`id_instituicao`) REFERENCES `Instituicoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Enderecos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sustentabilidadeXevento` ADD CONSTRAINT `sustentabilidadeXevento_id_sustentabilidade_fkey` FOREIGN KEY (`id_sustentabilidade`) REFERENCES `pontos_sustentabilidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sustentabilidadeXevento` ADD CONSTRAINT `sustentabilidadeXevento_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `acessibilidadeXevento` ADD CONSTRAINT `acessibilidadeXevento_id_acessibilidade_fkey` FOREIGN KEY (`id_acessibilidade`) REFERENCES `pontos_acessibilidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `acessibilidadeXevento` ADD CONSTRAINT `acessibilidadeXevento_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
