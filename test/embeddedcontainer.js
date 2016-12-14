/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

const Container = require('@ibm/ibm-concerto-runtime').Container;
const LoggingService = require('@ibm/ibm-concerto-runtime').LoggingService;
const EmbeddedContainer = require('..').EmbeddedContainer;
const version = require('../package.json').version;

require('chai').should();

describe('EmbeddedContainer', () => {

    describe('#constructor', () => {

        it('should construct a new container', () => {
            let container = new EmbeddedContainer();
            container.should.be.an.instanceOf(Container);
        });

    });

    describe('#getVersion', () => {

        it('should return the container version', () => {
            let container = new EmbeddedContainer();
            container.getVersion().should.equal(version);
        });

    });

    describe('#getLoggingService', () => {

        it('should return the container logging service', () => {
            let container = new EmbeddedContainer();
            container.getLoggingService().should.be.an.instanceOf(LoggingService);
        });

    });

});
