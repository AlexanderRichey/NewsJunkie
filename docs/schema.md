# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## Feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | text      | not null
updated_at  | date      | not null

## Articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references feeds), indexed
title       | string    | not null
pub_date    | date      | not null
content     | text      |
img_url     | string    |

## Categorized Feeds: Join Table: Feeds/Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key(references categories), indexed
feed_id     | integer   | not null, foreign key(references feeds), indexed

## Read Articles: Join Table: Articles/Feeds/Categories/Users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key(references users), indexed
category_id | integer   | not null, foreign key(references categories), indexed
feed_id     | integer   | not null, foreign key(references feeds), indexed
article_id  | integer   | not null, foreign key(references articles), indexed
