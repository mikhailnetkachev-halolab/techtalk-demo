CREATE TABLE actors (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    rating INT NOT NULL
);