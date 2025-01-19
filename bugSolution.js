```javascript
const query = { name: 'John Doe' };

// Correct use of direct comparison
const result = db.collection('users').findOne({ name: query.name }); 
//Alternative using $eq operator
//const result = db.collection('users').findOne({ name: { $eq: query.name } });
```