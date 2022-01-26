# Steps to reproduce: "Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?"

## 1. cd to strapi4-knex-issue-demonstration folder

## 2. create a postgres instance

### `sudo docker-compose up -d`

## 3. install dependency

### `yarn`

## 4. start Strapi server

### `yarn develop`

## 5. create a demo account and login to dashboard

## 6. add any one to one relation to a collection and save. said error will occur

### `for example add one to one relation to collection1 with target collection as collection15 from the dashboard`

#### sample structure in collection1:

```
    "collection_15": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::collection15.collection15",
      "inversedBy": "collection_1"
    }
```

#### sample structure in collection15:

```
    "collection_1": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::collection1.collection1",
      "inversedBy": "collection_15"
    }
```

`if still the error did not pop up then try this or modify other collection with this type of relation`

### for example:

#### sample structure in collection1:

```
    "collection_16": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::collection16.collection16",
      "inversedBy": "collection_1"
    }
```

#### sample structure in collection16:

```
    "collection_1": {
      "type": "relation",
      "relation": "oneToOne",
      "target": "api::collection1.collection1",
      "inversedBy": "collection_16"
    }
```
