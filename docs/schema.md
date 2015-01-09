# Schema Information

## blogs
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>owner_id</td>
    <td>integer</td>
    <td>not null, foreign key (references users)</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>not null</td>
  </tr>
</table>

## followings
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>blog_id</td>
    <td>integer</td>
    <td>not null, foreign key (references blogs)</td>
  </tr>
  <tr>
    <td>follower_id</td>
    <td>integer</td>
    <td>not null, foreign key (references users)</td>
  </tr>
</table>

## posts
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>author_id</td>
    <td>integer</td>
    <td>not null, foreign key (references users)</td>
  </tr>
  <tr>
    <td>blog_id</td>
    <td>integer</td>
    <td>not null, foreign key (references blogs)</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>not null</td>
  </tr>
  <tr>
    <td>body</td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## tags
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>not null</td>
  </tr>
</table>

## taggings
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>post_id</td>
    <td>integer</td>
    <td>not null, foreign key (references posts)</td>
  </tr>
  <tr>
    <td>tag_id</td>
    <td>integer</td>
    <td>not null, foreign key (references tags)</td>
  </tr>
</table>

## users
<table>
  <tr>
    <th>column name</th>
    <th>data type</th>
    <th>details</th>
  </tr>
  <tr>
    <td>id</td>
    <td>integer</td>
    <td>not null, primary key</td>
  </tr>
  <tr>
    <td>email</td>
    <td>string</td>
    <td>not null</td>
  </tr>
  <tr>
    <td>password_digest</td>
    <td>string</td>
    <td>not null</td>
  </tr>
  <tr>
    <td>session_token</td>
    <td>string</td>
    <td>not null</td>
  </tr>
</table>

