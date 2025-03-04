/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { EuiBadge, EuiDescriptionList, EuiLoadingSpinner } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { EncryptedSyntheticsMonitor } from '../../../../../../common/runtime_types';

export const MonitorStatus = ({
  loading,
  monitor,
  status,
  compressed = true,
}: {
  loading?: boolean;
  compressed?: boolean;
  monitor: EncryptedSyntheticsMonitor;
  status?: string;
}) => {
  const isBrowserType = monitor.type === 'browser';

  const badge = loading ? (
    <EuiLoadingSpinner size="s" />
  ) : !status ? (
    <EuiBadge color="default">{PENDING_LABEL}</EuiBadge>
  ) : status === 'up' ? (
    <EuiBadge color="success">{isBrowserType ? SUCCESS_LABEL : UP_LABEL}</EuiBadge>
  ) : (
    <EuiBadge color="danger">{isBrowserType ? FAILED_LABEL : DOWN_LABEL}</EuiBadge>
  );

  return (
    <EuiDescriptionList
      align="left"
      compressed={compressed}
      listItems={[{ title: STATUS_LABEL, description: badge }]}
    />
  );
};

export const STATUS_LABEL = i18n.translate('xpack.synthetics.monitorStatus.statusLabel', {
  defaultMessage: 'Status',
});

const FAILED_LABEL = i18n.translate('xpack.synthetics.monitorStatus.failedLabel', {
  defaultMessage: 'Failed',
});

const PENDING_LABEL = i18n.translate('xpack.synthetics.monitorStatus.pendingLabel', {
  defaultMessage: 'Pending',
});

const SUCCESS_LABEL = i18n.translate('xpack.synthetics.monitorStatus.succeededLabel', {
  defaultMessage: 'Succeeded',
});

const UP_LABEL = i18n.translate('xpack.synthetics.monitorStatus.upLabel', {
  defaultMessage: 'Up',
});

const DOWN_LABEL = i18n.translate('xpack.synthetics.monitorStatus.downLabel', {
  defaultMessage: 'Down',
});
