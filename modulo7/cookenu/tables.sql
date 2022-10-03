-- Active: 1658871330862@@35.226.146.116@3306@gebru-4211824-helaine-ribeiro
CREATE TABLE IF NOT EXISTS cookenu_users (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS cookenu_posts (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    createdAt DATE,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);

