import path from 'path';
import os from 'os';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:endpoint', () => {
  describe('node', () => {
    describe('standard', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "transpilerServer": "node",
              "webFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({appName: "a", userNameSpace: "b", transpilerServer: "node", server: "node", testsSeparated: true})
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.js',
          'server/api/todo2/dao/endp-dao.js',
          'server/api/todo2/model/endp-model.js',
          'server/api/todo2/routes/endp-route.js',

          'tests/server/todo2/dao/endp-dao.spec.js'
        ]);
      })
    })

    describe('babel', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "transpilerServer": "babel",
              "webFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({appName: "a", userNameSpace: "b", transpilerServer: "babel", server: "node", testsSeparated: true})
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.js',
          'server/api/todo2/dao/endp-dao.js',
          'server/api/todo2/model/endp-model.js',
          'server/api/todo2/routes/endp-route.js',

          'tests/server/todo2/dao/endp-dao.spec.js'
        ]);
      })
    })

    describe('typescript', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "transpilerServer": "typescript",
              "webFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({appName: "a", userNameSpace: "b", transpilerServer: "typescript", server: "node", testsSeparated: true})
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.ts',
          'server/api/todo2/dao/endp-dao.ts',
          'server/api/todo2/model/endp-model.ts',
          'server/api/todo2/routes/endp-route.ts',

          'tests/server/todo2/dao/endp-dao.spec.js'
        ]);
      })
    })
  })

  describe('go', () => {
    before((done) => {
      helpers
      .run(path.join(__dirname, '../../endpoint'))
      .inTmpDir(function() {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "server": "go"
          }
        }, this.async());
      })
      .withArguments('endp')
      .withPrompts({appName: "a", userNameSpace: "b", server: "go", testsSeparated: true})
      .withOptions({feature: 'todo2'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'server/api/todo2/controller/endpcontroller.go',
        'server/api/todo2/dao/endpdao.go',
        'server/api/todo2/model/endpmodel.go',
        'server/api/todo2/routes/endproute.go',

        'server/api/todo2/controller/endpcontroller_test.go',
        'server/api/todo2/routes/endproute_test.go',
        'server/api/todo2/dao/endpdao_test.go',
        'server/api/todo2/model/endpmodel_test.go'
      ]);
    });
  })
});
