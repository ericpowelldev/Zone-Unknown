DROP DATABASE IF EXISTS zu_db;
CREATE DATABASE zu_db;

DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;


--accounts table schema--

CREATE TABLE accounts (
  id int AUTO_INCREMENT,
  user_name varchar(50) NOT NULL,
  saved_game varchar(50) NOT NULL,
  logged_in boolean default false,
  PRIMARY KEY(id)
);

--socket table schema--

create table messages (
id int AUTO_INCREMENT,
message text NOT NULL,
PRIMARY KEY (id)
);

-- user table schema --

create table user (
  id int AUTO_INCREMENT,
  hasBioScanner boolean default false,
  hasGeoMapper boolean default false,
  hasLazer boolean default false,
  hasJetpack boolean default false,
  hasWaterFilter boolean default false,
  hasO2Scrubber boolean default false,
  counter int default 0 not null,
  health int default 20 not null,
  fuel int default 0 not null,
  oxygen int default 10 not null,
  level boolean default 0 not null,
  PRIMARY KEY (id)
)