/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// duplicate of the types from @kbn/core-usage-data-server
// required until https://github.com/elastic/kibana/issues/139389 is addressed

export interface CoreUsageData extends CoreUsageStats {
  config: CoreConfigUsageData;
  services: CoreServicesUsageData;
  environment: CoreEnvironmentUsageData;
}

export interface CoreUsageStats {
  // Saved Objects Client APIs
  'apiCalls.savedObjectsBulkCreate.total'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.default.total'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.custom.total'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkCreate.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkGet.total'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.default.total'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.custom.total'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkGet.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkResolve.total'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.default.total'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.custom.total'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkResolve.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkDelete.total'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.default.total'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.custom.total'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkDelete.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkUpdate.total'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.default.total'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.custom.total'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsBulkUpdate.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsCreate.total'?: number;
  'apiCalls.savedObjectsCreate.namespace.default.total'?: number;
  'apiCalls.savedObjectsCreate.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsCreate.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsCreate.namespace.custom.total'?: number;
  'apiCalls.savedObjectsCreate.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsCreate.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsDelete.total'?: number;
  'apiCalls.savedObjectsDelete.namespace.default.total'?: number;
  'apiCalls.savedObjectsDelete.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsDelete.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsDelete.namespace.custom.total'?: number;
  'apiCalls.savedObjectsDelete.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsDelete.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsFind.total'?: number;
  'apiCalls.savedObjectsFind.namespace.default.total'?: number;
  'apiCalls.savedObjectsFind.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsFind.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsFind.namespace.custom.total'?: number;
  'apiCalls.savedObjectsFind.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsFind.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsGet.total'?: number;
  'apiCalls.savedObjectsGet.namespace.default.total'?: number;
  'apiCalls.savedObjectsGet.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsGet.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsGet.namespace.custom.total'?: number;
  'apiCalls.savedObjectsGet.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsGet.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsResolve.total'?: number;
  'apiCalls.savedObjectsResolve.namespace.default.total'?: number;
  'apiCalls.savedObjectsResolve.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsResolve.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsResolve.namespace.custom.total'?: number;
  'apiCalls.savedObjectsResolve.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsResolve.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsUpdate.total'?: number;
  'apiCalls.savedObjectsUpdate.namespace.default.total'?: number;
  'apiCalls.savedObjectsUpdate.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsUpdate.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsUpdate.namespace.custom.total'?: number;
  'apiCalls.savedObjectsUpdate.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsUpdate.namespace.custom.kibanaRequest.no'?: number;
  // Saved Objects Management APIs
  'apiCalls.savedObjectsImport.total'?: number;
  'apiCalls.savedObjectsImport.namespace.default.total'?: number;
  'apiCalls.savedObjectsImport.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsImport.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsImport.namespace.custom.total'?: number;
  'apiCalls.savedObjectsImport.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsImport.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsImport.createNewCopiesEnabled.yes'?: number;
  'apiCalls.savedObjectsImport.createNewCopiesEnabled.no'?: number;
  'apiCalls.savedObjectsImport.overwriteEnabled.yes'?: number;
  'apiCalls.savedObjectsImport.overwriteEnabled.no'?: number;
  'apiCalls.savedObjectsResolveImportErrors.total'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.default.total'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.custom.total'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsResolveImportErrors.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsResolveImportErrors.createNewCopiesEnabled.yes'?: number;
  'apiCalls.savedObjectsResolveImportErrors.createNewCopiesEnabled.no'?: number;
  'apiCalls.savedObjectsExport.total'?: number;
  'apiCalls.savedObjectsExport.namespace.default.total'?: number;
  'apiCalls.savedObjectsExport.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsExport.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsExport.namespace.custom.total'?: number;
  'apiCalls.savedObjectsExport.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.savedObjectsExport.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.savedObjectsExport.allTypesSelected.yes'?: number;
  'apiCalls.savedObjectsExport.allTypesSelected.no'?: number;
  // Legacy Dashboard Import/Export API
  'apiCalls.legacyDashboardExport.total'?: number;
  'apiCalls.legacyDashboardExport.namespace.default.total'?: number;
  'apiCalls.legacyDashboardExport.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.legacyDashboardExport.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.legacyDashboardExport.namespace.custom.total'?: number;
  'apiCalls.legacyDashboardExport.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.legacyDashboardExport.namespace.custom.kibanaRequest.no'?: number;
  'apiCalls.legacyDashboardImport.total'?: number;
  'apiCalls.legacyDashboardImport.namespace.default.total'?: number;
  'apiCalls.legacyDashboardImport.namespace.default.kibanaRequest.yes'?: number;
  'apiCalls.legacyDashboardImport.namespace.default.kibanaRequest.no'?: number;
  'apiCalls.legacyDashboardImport.namespace.custom.total'?: number;
  'apiCalls.legacyDashboardImport.namespace.custom.kibanaRequest.yes'?: number;
  'apiCalls.legacyDashboardImport.namespace.custom.kibanaRequest.no'?: number;
  // Saved Objects Repository counters
  'savedObjectsRepository.resolvedOutcome.exactMatch'?: number;
  'savedObjectsRepository.resolvedOutcome.aliasMatch'?: number;
  'savedObjectsRepository.resolvedOutcome.conflict'?: number;
  'savedObjectsRepository.resolvedOutcome.notFound'?: number;
  'savedObjectsRepository.resolvedOutcome.total'?: number;
}

export interface CoreServicesUsageData {
  savedObjects: {
    // scripts/telemetry_check.js does not support parsing Array<{...}> types
    // so we have to disable eslint here and use {...}[]
    // eslint-disable-next-line @typescript-eslint/array-type
    indices: {
      alias: string;
      docsCount: number;
      docsDeleted: number;
      storeSizeBytes: number;
      primaryStoreSizeBytes: number;
      savedObjectsDocsCount: number;
    }[];
    legacyUrlAliases: {
      activeCount: number;
      inactiveCount: number;
      disabledCount: number;
      totalCount: number;
    };
  };
}

/**
 * Usage data on this Kibana node's runtime environment.
 * @public
 */
export interface CoreEnvironmentUsageData {
  memory: {
    heapTotalBytes: number;
    heapUsedBytes: number;
    /** V8 heap size limit */
    heapSizeLimit: number;
  };
}

/**
 * Usage data on this cluster's configuration of Core features
 * @public
 */
export interface CoreConfigUsageData {
  elasticsearch: {
    sniffOnStart: boolean;
    sniffIntervalMs?: number;
    sniffOnConnectionFault: boolean;
    numberOfHostsConfigured: number;
    requestHeadersWhitelistConfigured: boolean;
    customHeadersConfigured: boolean;
    shardTimeoutMs: number;
    requestTimeoutMs: number;
    pingTimeoutMs: number;
    logQueries: boolean;
    ssl: {
      verificationMode: 'none' | 'certificate' | 'full';
      certificateAuthoritiesConfigured: boolean;
      certificateConfigured: boolean;
      keyConfigured: boolean;
      keystoreConfigured: boolean;
      truststoreConfigured: boolean;
      alwaysPresentCertificate: boolean;
    };
    apiVersion: string;
    healthCheckDelayMs: number;
    principal:
      | 'elastic_user'
      | 'kibana_user'
      | 'kibana_system_user'
      | 'other_user'
      | 'kibana_service_account'
      | 'unknown';
  };

  http: {
    basePathConfigured: boolean;
    maxPayloadInBytes: number;
    rewriteBasePath: boolean;
    keepaliveTimeout: number;
    socketTimeout: number;
    compression: {
      enabled: boolean;
      referrerWhitelistConfigured: boolean;
    };
    xsrf: {
      disableProtection: boolean;
      allowlistConfigured: boolean;
    };
    requestId: {
      allowFromAnyIp: boolean;
      ipAllowlistConfigured: boolean;
    };
    ssl: {
      certificateAuthoritiesConfigured: boolean;
      certificateConfigured: boolean;
      cipherSuites: string[];
      keyConfigured: boolean;
      keystoreConfigured: boolean;
      truststoreConfigured: boolean;
      redirectHttpFromPortConfigured: boolean;
      supportedProtocols: string[];
      clientAuthentication: 'none' | 'optional' | 'required';
    };
    securityResponseHeaders: {
      strictTransportSecurity: string;
      xContentTypeOptions: string;
      referrerPolicy: string;
      permissionsPolicyConfigured: boolean;
      disableEmbedding: boolean;
      crossOriginOpenerPolicy: string;
    };
  };

  logging: {
    appendersTypesUsed: string[];
    loggersConfiguredCount: number;
  };

  // plugins: {
  //   /** list of built-in plugins that are disabled */
  //   firstPartyDisabled: string[];
  //   /** list of third-party plugins that are installed and enabled */
  //   thirdParty: string[];
  // };

  savedObjects: {
    customIndex: boolean;
    maxImportPayloadBytes: number;
    maxImportExportSize: number;
  };

  // uiSettings: {
  //   overridesCount: number;
  // };

  deprecatedKeys: {
    set: string[];
    unset: string[];
  };
}
