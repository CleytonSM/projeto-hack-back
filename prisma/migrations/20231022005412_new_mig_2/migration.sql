-- CreateTable
CREATE TABLE `marcar_presenca` (
    `id` VARCHAR(191) NOT NULL,
    `id_evento` VARCHAR(191) NOT NULL,
    `id_usuario` VARCHAR(191) NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `isFavorite` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `marcar_presenca` ADD CONSTRAINT `marcar_presenca_id_evento_fkey` FOREIGN KEY (`id_evento`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marcar_presenca` ADD CONSTRAINT `marcar_presenca_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
