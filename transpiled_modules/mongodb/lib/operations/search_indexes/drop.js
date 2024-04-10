"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropSearchIndexOperation = void 0;
const error_1 = require("../../error");
const operation_1 = require("../operation");
/** @internal */
class DropSearchIndexOperation extends operation_1.AbstractOperation {
  constructor(collection, name) {
    super();
    this.collection = collection;
    this.name = name;
  }
  async execute(server, session) {
    const namespace = this.collection.fullNamespace;
    const command = {
      dropSearchIndex: namespace.collection
    };
    if (typeof this.name === 'string') {
      command.name = this.name;
    }
    try {
      await server.commandAsync(namespace, command, {
        session
      });
    } catch (error) {
      const isNamespaceNotFoundError = error instanceof error_1.MongoServerError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound;
      if (!isNamespaceNotFoundError) {
        throw error;
      }
    }
  }
}
exports.DropSearchIndexOperation = DropSearchIndexOperation;