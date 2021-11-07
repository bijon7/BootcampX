const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error('query error', err.stack));