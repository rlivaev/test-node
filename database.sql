CREATE TABLE persons(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    age INTEGER(255) NOT NULL,
    isFree BOOLEAN,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE persons_books (
    person_id int REFERENCES persons (person_id) ON UPDATE CASCADE ON DELETE CASCADE,
    book_id int REFERENCES books (book_id) ON UPDATE CASCADE, 
    CONSTRAINT person_book_pkey PRIMARY KEY (person_id, book_id)
);