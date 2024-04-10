"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MongoUnexpectedServerResponseError = exports.MongoTransactionError = exports.MongoTopologyClosedError = exports.MongoTailableCursorError = exports.MongoSystemError = exports.MongoServerSelectionError = exports.MongoServerError = exports.MongoServerClosedError = exports.MongoRuntimeError = exports.MongoParseError = exports.MongoNotConnectedError = exports.MongoNetworkTimeoutError = exports.MongoNetworkError = exports.MongoMissingDependencyError = exports.MongoMissingCredentialsError = exports.MongoKerberosError = exports.MongoInvalidArgumentError = exports.MongoGridFSStreamError = exports.MongoGridFSChunkError = exports.MongoExpiredSessionError = exports.MongoError = exports.MongoDriverError = exports.MongoDecompressionError = exports.MongoCursorInUseError = exports.MongoCursorExhaustedError = exports.MongoCompatibilityError = exports.MongoChangeStreamError = exports.MongoBatchReExecutionError = exports.MongoAzureError = exports.MongoAWSError = exports.MongoAPIError = exports.ChangeStreamCursor = exports.ClientEncryption = exports.MongoBulkWriteError = exports.UUID = exports.Timestamp = exports.ObjectId = exports.MinKey = exports.MaxKey = exports.Long = exports.Int32 = exports.Double = exports.Decimal128 = exports.DBRef = exports.Code = exports.BSONType = exports.BSONSymbol = exports.BSONRegExp = exports.Binary = exports.BSON = void 0;
exports.ConnectionPoolReadyEvent = exports.ConnectionPoolMonitoringEvent = exports.ConnectionPoolCreatedEvent = exports.ConnectionPoolClosedEvent = exports.ConnectionPoolClearedEvent = exports.ConnectionCreatedEvent = exports.ConnectionClosedEvent = exports.ConnectionCheckOutStartedEvent = exports.ConnectionCheckOutFailedEvent = exports.ConnectionCheckedOutEvent = exports.ConnectionCheckedInEvent = exports.CommandSucceededEvent = exports.CommandStartedEvent = exports.CommandFailedEvent = exports.WriteConcern = exports.ReadPreference = exports.ReadConcern = exports.TopologyType = exports.ServerType = exports.ReadPreferenceMode = exports.ReadConcernLevel = exports.ProfilingLevel = exports.ReturnDocument = exports.ServerApiVersion = exports.ExplainVerbosity = exports.MongoErrorLabel = exports.CURSOR_FLAGS = exports.Compressor = exports.AuthMechanism = exports.GSSAPICanonicalizationValue = exports.AutoEncryptionLoggerLevel = exports.BatchType = exports.UnorderedBulkOperation = exports.OrderedBulkOperation = exports.MongoClient = exports.ListIndexesCursor = exports.ListCollectionsCursor = exports.GridFSBucketWriteStream = exports.GridFSBucketReadStream = exports.GridFSBucket = exports.FindCursor = exports.Db = exports.Collection = exports.ClientSession = exports.ChangeStream = exports.CancellationToken = exports.AggregationCursor = exports.Admin = exports.AbstractCursor = exports.MongoWriteConcernError = void 0;
exports.MongoCryptKMSRequestNetworkTimeoutError = exports.MongoCryptInvalidArgumentError = exports.MongoCryptError = exports.MongoCryptCreateEncryptedCollectionError = exports.MongoCryptCreateDataKeyError = exports.MongoCryptAzureKMSRequestError = exports.SrvPollingEvent = exports.TopologyOpeningEvent = exports.TopologyDescriptionChangedEvent = exports.TopologyClosedEvent = exports.ServerOpeningEvent = exports.ServerHeartbeatSucceededEvent = exports.ServerHeartbeatStartedEvent = exports.ServerHeartbeatFailedEvent = exports.ServerDescriptionChangedEvent = exports.ServerClosedEvent = exports.ConnectionReadyEvent = void 0;
const admin_1 = require("./admin");
Object.defineProperty(exports, "Admin", {
  enumerable: true,
  get: function () {
    return admin_1.Admin;
  }
});
const ordered_1 = require("./bulk/ordered");
Object.defineProperty(exports, "OrderedBulkOperation", {
  enumerable: true,
  get: function () {
    return ordered_1.OrderedBulkOperation;
  }
});
const unordered_1 = require("./bulk/unordered");
Object.defineProperty(exports, "UnorderedBulkOperation", {
  enumerable: true,
  get: function () {
    return unordered_1.UnorderedBulkOperation;
  }
});
const change_stream_1 = require("./change_stream");
Object.defineProperty(exports, "ChangeStream", {
  enumerable: true,
  get: function () {
    return change_stream_1.ChangeStream;
  }
});
const collection_1 = require("./collection");
Object.defineProperty(exports, "Collection", {
  enumerable: true,
  get: function () {
    return collection_1.Collection;
  }
});
const abstract_cursor_1 = require("./cursor/abstract_cursor");
Object.defineProperty(exports, "AbstractCursor", {
  enumerable: true,
  get: function () {
    return abstract_cursor_1.AbstractCursor;
  }
});
const aggregation_cursor_1 = require("./cursor/aggregation_cursor");
Object.defineProperty(exports, "AggregationCursor", {
  enumerable: true,
  get: function () {
    return aggregation_cursor_1.AggregationCursor;
  }
});
const find_cursor_1 = require("./cursor/find_cursor");
Object.defineProperty(exports, "FindCursor", {
  enumerable: true,
  get: function () {
    return find_cursor_1.FindCursor;
  }
});
const list_collections_cursor_1 = require("./cursor/list_collections_cursor");
Object.defineProperty(exports, "ListCollectionsCursor", {
  enumerable: true,
  get: function () {
    return list_collections_cursor_1.ListCollectionsCursor;
  }
});
const list_indexes_cursor_1 = require("./cursor/list_indexes_cursor");
Object.defineProperty(exports, "ListIndexesCursor", {
  enumerable: true,
  get: function () {
    return list_indexes_cursor_1.ListIndexesCursor;
  }
});
const db_1 = require("./db");
Object.defineProperty(exports, "Db", {
  enumerable: true,
  get: function () {
    return db_1.Db;
  }
});
const gridfs_1 = require("./gridfs");
Object.defineProperty(exports, "GridFSBucket", {
  enumerable: true,
  get: function () {
    return gridfs_1.GridFSBucket;
  }
});
const download_1 = require("./gridfs/download");
Object.defineProperty(exports, "GridFSBucketReadStream", {
  enumerable: true,
  get: function () {
    return download_1.GridFSBucketReadStream;
  }
});
const upload_1 = require("./gridfs/upload");
Object.defineProperty(exports, "GridFSBucketWriteStream", {
  enumerable: true,
  get: function () {
    return upload_1.GridFSBucketWriteStream;
  }
});
const mongo_client_1 = require("./mongo_client");
Object.defineProperty(exports, "MongoClient", {
  enumerable: true,
  get: function () {
    return mongo_client_1.MongoClient;
  }
});
const mongo_types_1 = require("./mongo_types");
Object.defineProperty(exports, "CancellationToken", {
  enumerable: true,
  get: function () {
    return mongo_types_1.CancellationToken;
  }
});
const sessions_1 = require("./sessions");
Object.defineProperty(exports, "ClientSession", {
  enumerable: true,
  get: function () {
    return sessions_1.ClientSession;
  }
});
/** @public */
var bson_1 = require("./bson");
Object.defineProperty(exports, "BSON", {
  enumerable: true,
  get: function () {
    return bson_1.BSON;
  }
});
var bson_2 = require("./bson");
Object.defineProperty(exports, "Binary", {
  enumerable: true,
  get: function () {
    return bson_2.Binary;
  }
});
Object.defineProperty(exports, "BSONRegExp", {
  enumerable: true,
  get: function () {
    return bson_2.BSONRegExp;
  }
});
Object.defineProperty(exports, "BSONSymbol", {
  enumerable: true,
  get: function () {
    return bson_2.BSONSymbol;
  }
});
Object.defineProperty(exports, "BSONType", {
  enumerable: true,
  get: function () {
    return bson_2.BSONType;
  }
});
Object.defineProperty(exports, "Code", {
  enumerable: true,
  get: function () {
    return bson_2.Code;
  }
});
Object.defineProperty(exports, "DBRef", {
  enumerable: true,
  get: function () {
    return bson_2.DBRef;
  }
});
Object.defineProperty(exports, "Decimal128", {
  enumerable: true,
  get: function () {
    return bson_2.Decimal128;
  }
});
Object.defineProperty(exports, "Double", {
  enumerable: true,
  get: function () {
    return bson_2.Double;
  }
});
Object.defineProperty(exports, "Int32", {
  enumerable: true,
  get: function () {
    return bson_2.Int32;
  }
});
Object.defineProperty(exports, "Long", {
  enumerable: true,
  get: function () {
    return bson_2.Long;
  }
});
Object.defineProperty(exports, "MaxKey", {
  enumerable: true,
  get: function () {
    return bson_2.MaxKey;
  }
});
Object.defineProperty(exports, "MinKey", {
  enumerable: true,
  get: function () {
    return bson_2.MinKey;
  }
});
Object.defineProperty(exports, "ObjectId", {
  enumerable: true,
  get: function () {
    return bson_2.ObjectId;
  }
});
Object.defineProperty(exports, "Timestamp", {
  enumerable: true,
  get: function () {
    return bson_2.Timestamp;
  }
});
Object.defineProperty(exports, "UUID", {
  enumerable: true,
  get: function () {
    return bson_2.UUID;
  }
});
var common_1 = require("./bulk/common");
Object.defineProperty(exports, "MongoBulkWriteError", {
  enumerable: true,
  get: function () {
    return common_1.MongoBulkWriteError;
  }
});
var client_encryption_1 = require("./client-side-encryption/client_encryption");
Object.defineProperty(exports, "ClientEncryption", {
  enumerable: true,
  get: function () {
    return client_encryption_1.ClientEncryption;
  }
});
var change_stream_cursor_1 = require("./cursor/change_stream_cursor");
Object.defineProperty(exports, "ChangeStreamCursor", {
  enumerable: true,
  get: function () {
    return change_stream_cursor_1.ChangeStreamCursor;
  }
});
var error_1 = require("./error");
Object.defineProperty(exports, "MongoAPIError", {
  enumerable: true,
  get: function () {
    return error_1.MongoAPIError;
  }
});
Object.defineProperty(exports, "MongoAWSError", {
  enumerable: true,
  get: function () {
    return error_1.MongoAWSError;
  }
});
Object.defineProperty(exports, "MongoAzureError", {
  enumerable: true,
  get: function () {
    return error_1.MongoAzureError;
  }
});
Object.defineProperty(exports, "MongoBatchReExecutionError", {
  enumerable: true,
  get: function () {
    return error_1.MongoBatchReExecutionError;
  }
});
Object.defineProperty(exports, "MongoChangeStreamError", {
  enumerable: true,
  get: function () {
    return error_1.MongoChangeStreamError;
  }
});
Object.defineProperty(exports, "MongoCompatibilityError", {
  enumerable: true,
  get: function () {
    return error_1.MongoCompatibilityError;
  }
});
Object.defineProperty(exports, "MongoCursorExhaustedError", {
  enumerable: true,
  get: function () {
    return error_1.MongoCursorExhaustedError;
  }
});
Object.defineProperty(exports, "MongoCursorInUseError", {
  enumerable: true,
  get: function () {
    return error_1.MongoCursorInUseError;
  }
});
Object.defineProperty(exports, "MongoDecompressionError", {
  enumerable: true,
  get: function () {
    return error_1.MongoDecompressionError;
  }
});
Object.defineProperty(exports, "MongoDriverError", {
  enumerable: true,
  get: function () {
    return error_1.MongoDriverError;
  }
});
Object.defineProperty(exports, "MongoError", {
  enumerable: true,
  get: function () {
    return error_1.MongoError;
  }
});
Object.defineProperty(exports, "MongoExpiredSessionError", {
  enumerable: true,
  get: function () {
    return error_1.MongoExpiredSessionError;
  }
});
Object.defineProperty(exports, "MongoGridFSChunkError", {
  enumerable: true,
  get: function () {
    return error_1.MongoGridFSChunkError;
  }
});
Object.defineProperty(exports, "MongoGridFSStreamError", {
  enumerable: true,
  get: function () {
    return error_1.MongoGridFSStreamError;
  }
});
Object.defineProperty(exports, "MongoInvalidArgumentError", {
  enumerable: true,
  get: function () {
    return error_1.MongoInvalidArgumentError;
  }
});
Object.defineProperty(exports, "MongoKerberosError", {
  enumerable: true,
  get: function () {
    return error_1.MongoKerberosError;
  }
});
Object.defineProperty(exports, "MongoMissingCredentialsError", {
  enumerable: true,
  get: function () {
    return error_1.MongoMissingCredentialsError;
  }
});
Object.defineProperty(exports, "MongoMissingDependencyError", {
  enumerable: true,
  get: function () {
    return error_1.MongoMissingDependencyError;
  }
});
Object.defineProperty(exports, "MongoNetworkError", {
  enumerable: true,
  get: function () {
    return error_1.MongoNetworkError;
  }
});
Object.defineProperty(exports, "MongoNetworkTimeoutError", {
  enumerable: true,
  get: function () {
    return error_1.MongoNetworkTimeoutError;
  }
});
Object.defineProperty(exports, "MongoNotConnectedError", {
  enumerable: true,
  get: function () {
    return error_1.MongoNotConnectedError;
  }
});
Object.defineProperty(exports, "MongoParseError", {
  enumerable: true,
  get: function () {
    return error_1.MongoParseError;
  }
});
Object.defineProperty(exports, "MongoRuntimeError", {
  enumerable: true,
  get: function () {
    return error_1.MongoRuntimeError;
  }
});
Object.defineProperty(exports, "MongoServerClosedError", {
  enumerable: true,
  get: function () {
    return error_1.MongoServerClosedError;
  }
});
Object.defineProperty(exports, "MongoServerError", {
  enumerable: true,
  get: function () {
    return error_1.MongoServerError;
  }
});
Object.defineProperty(exports, "MongoServerSelectionError", {
  enumerable: true,
  get: function () {
    return error_1.MongoServerSelectionError;
  }
});
Object.defineProperty(exports, "MongoSystemError", {
  enumerable: true,
  get: function () {
    return error_1.MongoSystemError;
  }
});
Object.defineProperty(exports, "MongoTailableCursorError", {
  enumerable: true,
  get: function () {
    return error_1.MongoTailableCursorError;
  }
});
Object.defineProperty(exports, "MongoTopologyClosedError", {
  enumerable: true,
  get: function () {
    return error_1.MongoTopologyClosedError;
  }
});
Object.defineProperty(exports, "MongoTransactionError", {
  enumerable: true,
  get: function () {
    return error_1.MongoTransactionError;
  }
});
Object.defineProperty(exports, "MongoUnexpectedServerResponseError", {
  enumerable: true,
  get: function () {
    return error_1.MongoUnexpectedServerResponseError;
  }
});
Object.defineProperty(exports, "MongoWriteConcernError", {
  enumerable: true,
  get: function () {
    return error_1.MongoWriteConcernError;
  }
});
// enums
var common_2 = require("./bulk/common");
Object.defineProperty(exports, "BatchType", {
  enumerable: true,
  get: function () {
    return common_2.BatchType;
  }
});
var auto_encrypter_1 = require("./client-side-encryption/auto_encrypter");
Object.defineProperty(exports, "AutoEncryptionLoggerLevel", {
  enumerable: true,
  get: function () {
    return auto_encrypter_1.AutoEncryptionLoggerLevel;
  }
});
var gssapi_1 = require("./cmap/auth/gssapi");
Object.defineProperty(exports, "GSSAPICanonicalizationValue", {
  enumerable: true,
  get: function () {
    return gssapi_1.GSSAPICanonicalizationValue;
  }
});
var providers_1 = require("./cmap/auth/providers");
Object.defineProperty(exports, "AuthMechanism", {
  enumerable: true,
  get: function () {
    return providers_1.AuthMechanism;
  }
});
var compression_1 = require("./cmap/wire_protocol/compression");
Object.defineProperty(exports, "Compressor", {
  enumerable: true,
  get: function () {
    return compression_1.Compressor;
  }
});
var abstract_cursor_2 = require("./cursor/abstract_cursor");
Object.defineProperty(exports, "CURSOR_FLAGS", {
  enumerable: true,
  get: function () {
    return abstract_cursor_2.CURSOR_FLAGS;
  }
});
var error_2 = require("./error");
Object.defineProperty(exports, "MongoErrorLabel", {
  enumerable: true,
  get: function () {
    return error_2.MongoErrorLabel;
  }
});
var explain_1 = require("./explain");
Object.defineProperty(exports, "ExplainVerbosity", {
  enumerable: true,
  get: function () {
    return explain_1.ExplainVerbosity;
  }
});
var mongo_client_2 = require("./mongo_client");
Object.defineProperty(exports, "ServerApiVersion", {
  enumerable: true,
  get: function () {
    return mongo_client_2.ServerApiVersion;
  }
});
var find_and_modify_1 = require("./operations/find_and_modify");
Object.defineProperty(exports, "ReturnDocument", {
  enumerable: true,
  get: function () {
    return find_and_modify_1.ReturnDocument;
  }
});
var set_profiling_level_1 = require("./operations/set_profiling_level");
Object.defineProperty(exports, "ProfilingLevel", {
  enumerable: true,
  get: function () {
    return set_profiling_level_1.ProfilingLevel;
  }
});
var read_concern_1 = require("./read_concern");
Object.defineProperty(exports, "ReadConcernLevel", {
  enumerable: true,
  get: function () {
    return read_concern_1.ReadConcernLevel;
  }
});
var read_preference_1 = require("./read_preference");
Object.defineProperty(exports, "ReadPreferenceMode", {
  enumerable: true,
  get: function () {
    return read_preference_1.ReadPreferenceMode;
  }
});
var common_3 = require("./sdam/common");
Object.defineProperty(exports, "ServerType", {
  enumerable: true,
  get: function () {
    return common_3.ServerType;
  }
});
Object.defineProperty(exports, "TopologyType", {
  enumerable: true,
  get: function () {
    return common_3.TopologyType;
  }
});
// Helper classes
var read_concern_2 = require("./read_concern");
Object.defineProperty(exports, "ReadConcern", {
  enumerable: true,
  get: function () {
    return read_concern_2.ReadConcern;
  }
});
var read_preference_2 = require("./read_preference");
Object.defineProperty(exports, "ReadPreference", {
  enumerable: true,
  get: function () {
    return read_preference_2.ReadPreference;
  }
});
var write_concern_1 = require("./write_concern");
Object.defineProperty(exports, "WriteConcern", {
  enumerable: true,
  get: function () {
    return write_concern_1.WriteConcern;
  }
});
// events
var command_monitoring_events_1 = require("./cmap/command_monitoring_events");
Object.defineProperty(exports, "CommandFailedEvent", {
  enumerable: true,
  get: function () {
    return command_monitoring_events_1.CommandFailedEvent;
  }
});
Object.defineProperty(exports, "CommandStartedEvent", {
  enumerable: true,
  get: function () {
    return command_monitoring_events_1.CommandStartedEvent;
  }
});
Object.defineProperty(exports, "CommandSucceededEvent", {
  enumerable: true,
  get: function () {
    return command_monitoring_events_1.CommandSucceededEvent;
  }
});
var connection_pool_events_1 = require("./cmap/connection_pool_events");
Object.defineProperty(exports, "ConnectionCheckedInEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionCheckedInEvent;
  }
});
Object.defineProperty(exports, "ConnectionCheckedOutEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionCheckedOutEvent;
  }
});
Object.defineProperty(exports, "ConnectionCheckOutFailedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionCheckOutFailedEvent;
  }
});
Object.defineProperty(exports, "ConnectionCheckOutStartedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionCheckOutStartedEvent;
  }
});
Object.defineProperty(exports, "ConnectionClosedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionClosedEvent;
  }
});
Object.defineProperty(exports, "ConnectionCreatedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionCreatedEvent;
  }
});
Object.defineProperty(exports, "ConnectionPoolClearedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionPoolClearedEvent;
  }
});
Object.defineProperty(exports, "ConnectionPoolClosedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionPoolClosedEvent;
  }
});
Object.defineProperty(exports, "ConnectionPoolCreatedEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionPoolCreatedEvent;
  }
});
Object.defineProperty(exports, "ConnectionPoolMonitoringEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionPoolMonitoringEvent;
  }
});
Object.defineProperty(exports, "ConnectionPoolReadyEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionPoolReadyEvent;
  }
});
Object.defineProperty(exports, "ConnectionReadyEvent", {
  enumerable: true,
  get: function () {
    return connection_pool_events_1.ConnectionReadyEvent;
  }
});
var events_1 = require("./sdam/events");
Object.defineProperty(exports, "ServerClosedEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerClosedEvent;
  }
});
Object.defineProperty(exports, "ServerDescriptionChangedEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerDescriptionChangedEvent;
  }
});
Object.defineProperty(exports, "ServerHeartbeatFailedEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerHeartbeatFailedEvent;
  }
});
Object.defineProperty(exports, "ServerHeartbeatStartedEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerHeartbeatStartedEvent;
  }
});
Object.defineProperty(exports, "ServerHeartbeatSucceededEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerHeartbeatSucceededEvent;
  }
});
Object.defineProperty(exports, "ServerOpeningEvent", {
  enumerable: true,
  get: function () {
    return events_1.ServerOpeningEvent;
  }
});
Object.defineProperty(exports, "TopologyClosedEvent", {
  enumerable: true,
  get: function () {
    return events_1.TopologyClosedEvent;
  }
});
Object.defineProperty(exports, "TopologyDescriptionChangedEvent", {
  enumerable: true,
  get: function () {
    return events_1.TopologyDescriptionChangedEvent;
  }
});
Object.defineProperty(exports, "TopologyOpeningEvent", {
  enumerable: true,
  get: function () {
    return events_1.TopologyOpeningEvent;
  }
});
var srv_polling_1 = require("./sdam/srv_polling");
Object.defineProperty(exports, "SrvPollingEvent", {
  enumerable: true,
  get: function () {
    return srv_polling_1.SrvPollingEvent;
  }
});
var errors_1 = require("./client-side-encryption/errors");
Object.defineProperty(exports, "MongoCryptAzureKMSRequestError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptAzureKMSRequestError;
  }
});
Object.defineProperty(exports, "MongoCryptCreateDataKeyError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptCreateDataKeyError;
  }
});
Object.defineProperty(exports, "MongoCryptCreateEncryptedCollectionError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptCreateEncryptedCollectionError;
  }
});
Object.defineProperty(exports, "MongoCryptError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptError;
  }
});
Object.defineProperty(exports, "MongoCryptInvalidArgumentError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptInvalidArgumentError;
  }
});
Object.defineProperty(exports, "MongoCryptKMSRequestNetworkTimeoutError", {
  enumerable: true,
  get: function () {
    return errors_1.MongoCryptKMSRequestNetworkTimeoutError;
  }
});