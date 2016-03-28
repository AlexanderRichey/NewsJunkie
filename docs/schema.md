# Schema Information

## Feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | text      | not null
updated_at  | date      | not null
category_id | integer   | not null, foreign key (references categories), indexed

## Articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references feeds), indexed
title       | string    | not null
pub_date    | date      | not null
content     | text      |
img_url     | string    |
read?       | boolean   | not null, default: false

## Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
