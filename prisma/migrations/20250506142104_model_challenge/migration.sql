-- CreateTable
CREATE TABLE `Challenge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `xp` INTEGER NOT NULL,
    `id_serie` INTEGER NOT NULL,
    `id_creator` INTEGER NOT NULL,

    UNIQUE INDEX `Challenge_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `obtained_title` VARCHAR(191) NOT NULL,
    `id_theme` INTEGER NOT NULL,

    UNIQUE INDEX `Serie_title_key`(`title`),
    UNIQUE INDEX `Serie_obtained_title_key`(`obtained_title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Theme_label_key`(`label`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Challenge` ADD CONSTRAINT `Challenge_id_serie_fkey` FOREIGN KEY (`id_serie`) REFERENCES `Serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Challenge` ADD CONSTRAINT `Challenge_id_creator_fkey` FOREIGN KEY (`id_creator`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Serie` ADD CONSTRAINT `Serie_id_theme_fkey` FOREIGN KEY (`id_theme`) REFERENCES `Theme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
