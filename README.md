# graphql-pokeapi

GraphQL implementation of pokeapi.co

See [mazipan-gql-pokeapi.herokuapp.com/](https://mazipan-gql-pokeapi.herokuapp.com/)

## Queries

### getPokemonList

Sample Query:

```js
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    results {
      url
      name
    }
    status
  }
}
```

Sample Variables:

```json
{
  "limit": 2,
  "offset": 1
}
```

Sample Result:

```json
{
  "data": {
    "pokemons": {
      "count": 964,
      "next": "https://pokeapi.co/api/v2/pokemon/?offset=6&limit=6",
      "previous": null,
      "results": [
        {
          "url": "https://pokeapi.co/api/v2/pokemon/1/",
          "name": "bulbasaur"
        },
        {
          "url": "https://pokeapi.co/api/v2/pokemon/2/",
          "name": "ivysaur"
        }
      ],
      "status": true
    }
  }
}
```

## Schemas

----

Copyright © By Irfan Maulana
