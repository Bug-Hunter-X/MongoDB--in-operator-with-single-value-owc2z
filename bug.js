```javascript
const query = { name: 'John Doe' };

// Incorrect use of $in operator with a single value
const result = db.collection('users').findOne({ name: { $in: query.name } });
```