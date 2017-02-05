DROP DATABASE IF EXISTS hhbuilder_development;
CREATE DATABASE hhbuilder_development;

\c hhbuilder_development;

CREATE TABLE members (
  ID SERIAL PRIMARY KEY,
    age VARCHAR,
    relationship VARCHAR,
    smoker BOOLEAN
);

