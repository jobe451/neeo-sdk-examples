'use strict';

const sinon = require('sinon');
const chai = require('chai');
chai.use(require('sinon-chai'));
const expect = chai.expect;

const requireHelper = require('../../require_helper.js');
const AccessoryController = requireHelper('lib/simpleAccessory/AccessoryController');

const deviceId = 'default';
const POWER_ON = 'POWER ON';

describe('./lib/simpleAccessory/AccessoryController.js', function() {
  let sandbox, controller;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    controller = AccessoryController.build();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should build controller instance', function() {
    expect(controller).to.be.instanceof(AccessoryController);
  });

  describe('onButtonPressed', function() {
    it('should handle button without error', function() {
      expect(() => {
        controller.onButtonPressed(POWER_ON, deviceId);
      }).to.not.throw();
    });
  });
});
