/**
 * Copyright 2018 IBM All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

// reuse the client implementation of the logger as we are part of the client
// abstracted out in case we want to change this in the future.
const {Utils} = require('fabric-common');
module.exports.getLogger = Utils.getLogger;
