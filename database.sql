CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastNAME VARCHAR(255),
    age INTEGER(255),
    isFree BOOLEAN,
    createdAt INTEGER(255),
    updatedAt INTEGER(255)
);
CREATE TABLE Book(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    createdAt INTEGER
);
