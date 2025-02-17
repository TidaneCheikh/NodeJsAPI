# Méthodes de mutation (modifier le tableau d'origine)

### `push(element1, ..., elementN)`

Ajoute des éléments à la fin.
- **Renvoie :** nouvelle longueur.
```js
arr.push(5); // [1,2,3] → [1,2,3,5]
```

### `pop()`
Supprime le dernier élément.
- **Renvoie :** élément supprimé.
```js
arr.pop(); // [1,2,3] → [1,2]
```

### `shift()`
Supprime le premier élément.
- **Renvoie :** élément supprimé.
```js
arr.shift(); // [1,2,3] → [2,3]
```

### `unshift(element1, ..., elementN)`
Ajoute des éléments au début.
- **Renvoie :** nouvelle longueur.
```js
arr.unshift(0); // [1,2,3] → [0,1,2,3]
```

### `splice(start, deleteCount, ...items)`
Ajoute/supprime des éléments à l'index de départ.
- **Renvoie :** tableau des éléments supprimés.
```js
arr.splice(1, 1, 'a'); // [1,2,3] → [1,'a',3]
```

### `sort([compareFunction])`
Trie les éléments (lexicographiquement par défaut).
- **Renvoie :** tableau trié (mute l'original).
```js
arr.sort((a, b) => a - b); // [3,1,2] → [1,2,3]
```

### `reverse()`
Inverse le tableau.
- **Renvoie :** tableau inversé (mute l'original).
```js
arr.reverse(); // [1,2,3] → [3,2,1]
```

### `fill(value, start?, end?)`
Remplit le tableau avec `value` entre `start` et `end`.
```js
arr.fill(0); // [1,2,3] → [0,0,0]
```

### `copyWithin(target, start, end?)`
Copie les éléments dans le tableau.
```js
[1,2,3,4].copyWithin(0, 2); // → [3,4,3,4]
```

# Méthodes d'accès (ne modifient pas le tableau d'origine)

### `concat(...arrays)`
Fusionne les tableaux.
- **Renvoie :** Nouveau tableau fusionné.
```js
arr.concat([4,5]); // [1,2,3] → [1,2,3,4,5]
```

### `slice(start?, end?)`
Renvoie un sous-tableau compris entre `start` et `end`.
```js
arr.slice(1, 3); // [1,2,3,4] → [2,3]
```

### `join(separator?)`
Joint des éléments dans une chaîne (par défaut : `,`).
```js
arr.join('-'); // [1,2,3] → "1-2-3"
```

### `includes(element)`
Vérifie si le tableau contient `element`.
- **Renvoie :** `true`/ `false`.
```js
arr.includes(2); // [1,2,3] → true
```

### `indexOf(element)`
Renvoie le premier index de `element` ou `-1`.
```js
arr.indexOf(2); // [1,2,3] → 1
```

### `lastIndexOf(element)`
Renvoie le dernier index de `element` ou `-1`.
```js
[1,2,2,3].lastIndexOf(2); // → 2
```

### `toString()`
Identique à `join()`.
```js
[1,2,3].toString(); // "1,2,3"
```

### `toSorted()` (ES2023)
Version non mutante de `sort()`.
```js
const sorted = arr.toSorted();
```

### `toReversed()` (ES2023)
Version non mutante de `reverse()`.
```js
const reversed = arr.toReversed();
```

# Méthodes d'itération

### `forEach(callback)`
S'exécute `callback` pour chaque élément.
- **Renvoie :** `undefined`.
```js
arr.forEach(x => console.log(x));
```

### `map(callback)`
Renvoie un nouveau tableau avec des éléments transformés.
```js
const doubled = arr.map(x => x * 2);
```

### `filter(callback)`
Renvoie les éléments qui réussissent `callback` le test.
```js
const evens = arr.filter(x => x % 2 === 0);
```

### `reduce(callback, initialValue?)`
Réduit le tableau à une seule valeur.
```js
const sum = arr.reduce((acc, x) => acc + x, 0);
```

### `find(callback)`
Renvoie le premier élément réussissant `callback` le test.
```js
const firstEven = arr.find(x => x % 2 === 0);
```

### `some(callback)`
Vérifie si au moins un `element` passe le test.
- **Renvoie :** `true`/ `false`.
```js
const hasEven = arr.some(x => x % 2 === 0);
```

### `every(callback)`
Vérifie si tous les éléments passent le test.
```js
const allEven = arr.every(x => x % 2 === 0);
```

### `flat(depth = 1)`
Aplatit les tableaux imbriqués.
```js
[1, [2]].flat(); // → [1,2]
```

### `flatMap(callback)`
`map()` puis aplatit le résultat.
```js
arr.flatMap(x => [x, x*2]); // [1,2] → [1,2,2,4]
```

# Méthodes statiques

### `Array.isArray(value)`
Vérifie si la valeur est un tableau.
```js
Array.isArray([1,2]); // → true
```

### `Array.from(arrayLike)`
Crée un tableau à partir d'un tableau de type itérable.
```js
Array.from('123'); // → ['1','2','3']
```

### `Array.of(...elements)`
Crée un tableau à partir d'arguments.
```js
Array.of(1,2,3); // → [1,2,3]
```

# Ajouts ES6+

### `at(index)`
Renvoie l'élément à l'index (prend en charge les valeurs négatives).
```js
[1,2,3].at(-1); // → 3
```

### `findLast(callback)` (ES2023)
Renvoie le dernier élément ayant réussi le test.
```js
[1,2,2,3].findLast(x => x === 2); // → 2
```

## Notes clés :
- **Mutateurs :** modifient le tableau d'origine (`push`, `sort`, etc.).
- **Accesseurs :** renvoient de nouvelles données (`slice`, `concat`, etc.).
- **Itérateurs :** traitent les éléments (`map`, `filter`, etc.).
- **ES2023+ :** utilisez `toSorted()`, `toReversed()`, etc., pour des opérations non mutantes.

