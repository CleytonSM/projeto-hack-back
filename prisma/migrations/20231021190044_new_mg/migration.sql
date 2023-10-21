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
ALTER TABLE `sustentabilidadeXevento` ADD CONSTRAINT `sustentabilidadeXevento_id_sustentabilidade_fkey` FOREIGN KEY (`id_sustentabilidade`) REFERENCES `pontos_sustentabilidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sustentabilidadeXevento` ADD CONSTRAINT `sustentabilidadeXevento_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `acessibilidadeXevento` ADD CONSTRAINT `acessibilidadeXevento_id_acessibilidade_fkey` FOREIGN KEY (`id_acessibilidade`) REFERENCES `pontos_acessibilidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `acessibilidadeXevento` ADD CONSTRAINT `acessibilidadeXevento_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
