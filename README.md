# Steps to reproduce: "Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?"

## 1. cd to strapi4-knex-issue-demonstration folder

## 2. create a postgres instance

### `sudo docker-compose up -d`

## 3. install dependency

### `yarn`

## 4. start Strapi server

### `yarn develop`

## 5. create a demo account and login to dashboard

## 6. add any one to many relation to a collection and save. said error will occur

### `for example add one to many relation to collection1 with target collection as collection15`
