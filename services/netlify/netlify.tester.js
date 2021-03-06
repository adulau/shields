'use strict'

const { isBuildStatus } = require('../build-status')
const t = (module.exports = require('../tester').createServiceTester())

t.create('netlify (valid, no branch)')
  .get('/e6d5a4e0-dee1-4261-833e-2f47f509c68f.json')
  .expectBadge({
    label: 'netlify',
    message: isBuildStatus,
  })

t.create('netlify (repo not found)')
  .get('/not-a-repo.json')
  .expectBadge({ label: 'netlify', message: 'not found' })
