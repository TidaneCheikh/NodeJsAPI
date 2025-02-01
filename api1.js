let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copie toutes les propriétés de permissions1 et 2 dans user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); // John
console.log(user.canView); 
console.log(user)
// true