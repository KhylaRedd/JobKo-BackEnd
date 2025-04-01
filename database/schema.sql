DROP DATABASE IF EXISTS jobko;
CREATE DATABASE jobko;

\c jobko;

-- Drop the tables with CASCADE

-- DROP TABLE IF EXISTS cover_letters CASCADE;
-- DROP TABLE IF EXISTS resumes CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS jobs CASCADE;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK(age > 15) NOT NULL, 
    password TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    location VARCHAR(225)
);



CREATE TABLE resumes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    ats_score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- DROP TABLE IF EXISTS cover_letters;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    company VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    is_favorite BOOLEAN DEFAULT FALSE

);

CREATE TABLE cover_letters (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    job_id INTEGER REFERENCES jobs(id) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    is_favorite BOOLEAN DEFAULT FALSE
);





  
