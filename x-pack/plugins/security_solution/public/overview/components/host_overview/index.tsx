/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFlexGroup, EuiFlexItem, EuiHorizontalRule } from '@elastic/eui';
import { euiDarkVars as darkTheme, euiLightVars as lightTheme } from '@kbn/ui-theme';
import { getOr } from 'lodash/fp';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useGlobalTime } from '../../../common/containers/use_global_time';
import type { HostItem } from '../../../../common/search_strategy';
import { buildHostNamesFilter, RiskScoreEntity } from '../../../../common/search_strategy';
import { DEFAULT_DARK_MODE } from '../../../../common/constants';
import type { DescriptionList } from '../../../../common/utility_types';
import { useUiSetting$ } from '../../../common/lib/kibana';
import { getEmptyTagValue } from '../../../common/components/empty_value';
import {
  DefaultFieldRenderer,
  hostIdRenderer,
} from '../../../timelines/components/field_renderers/field_renderers';
import {
  FirstLastSeen,
  FirstLastSeenType,
} from '../../../common/components/first_last_seen/first_last_seen';
import { InspectButton, InspectButtonContainer } from '../../../common/components/inspect';
import { Loader } from '../../../common/components/loader';
import { NetworkDetailsLink } from '../../../common/components/links';
import { hasMlUserPermissions } from '../../../../common/machine_learning/has_ml_user_permissions';
import { useMlCapabilities } from '../../../common/components/ml/hooks/use_ml_capabilities';
import { AnomalyScores } from '../../../common/components/ml/score/anomaly_scores';
import type { Anomalies, NarrowDateRange } from '../../../common/components/ml/types';
import { DescriptionListStyled, OverviewWrapper } from '../../../common/components/page';
import * as i18n from './translations';
import { EndpointOverview } from './endpoint_overview';
import { OverviewDescriptionList } from '../../../common/components/overview_description_list';
import { useRiskScore } from '../../../explore/containers/risk_score';
import { RiskScore } from '../../../explore/components/risk_score/severity/common';
import { RiskScoreHeaderTitle } from '../../../explore/components/risk_score/risk_score_onboarding/risk_score_header_title';

interface HostSummaryProps {
  contextID?: string; // used to provide unique draggable context when viewing in the side panel
  data: HostItem;
  id: string;
  isDraggable?: boolean;
  isInDetailsSidePanel: boolean;
  loading: boolean;
  isLoadingAnomaliesData: boolean;
  indexNames: string[];
  anomaliesData: Anomalies | null;
  startDate: string;
  endDate: string;
  narrowDateRange: NarrowDateRange;
  hostName: string;
}

const HostRiskOverviewWrapper = styled(EuiFlexGroup)`
  padding-top: ${({ theme }) => theme.eui.euiSizeM};
  width: ${({ $width }: { $width: string }) => $width};
`;

export const HostOverview = React.memo<HostSummaryProps>(
  ({
    anomaliesData,
    contextID,
    data,
    endDate,
    id,
    isDraggable = false,
    isInDetailsSidePanel = false, // Rather than duplicate the component, alter the structure based on it's location
    isLoadingAnomaliesData,
    indexNames,
    loading,
    narrowDateRange,
    startDate,
    hostName,
  }) => {
    const capabilities = useMlCapabilities();
    const userPermissions = hasMlUserPermissions(capabilities);
    const [darkMode] = useUiSetting$<boolean>(DEFAULT_DARK_MODE);
    const filterQuery = useMemo(
      () => (hostName ? buildHostNamesFilter([hostName]) : undefined),
      [hostName]
    );
    const { from, to } = useGlobalTime();

    const timerange = useMemo(
      () => ({
        from,
        to,
      }),
      [from, to]
    );
    const { data: hostRisk, isLicenseValid } = useRiskScore({
      filterQuery,
      riskEntity: RiskScoreEntity.host,
      skip: hostName == null,
      timerange,
    });

    const getDefaultRenderer = useCallback(
      (fieldName: string, fieldData: HostItem) => (
        <DefaultFieldRenderer
          rowItems={getOr([], fieldName, fieldData)}
          attrName={fieldName}
          idPrefix={contextID ? `host-overview-${contextID}` : 'host-overview'}
          isDraggable={isDraggable}
        />
      ),
      [contextID, isDraggable]
    );

    const [hostRiskScore, hostRiskLevel] = useMemo(() => {
      const hostRiskData = hostRisk && hostRisk.length > 0 ? hostRisk[0] : undefined;
      return [
        {
          title: (
            <RiskScoreHeaderTitle
              title={i18n.HOST_RISK_SCORE}
              riskScoreEntity={RiskScoreEntity.host}
            />
          ),
          description: (
            <>
              {hostRiskData
                ? Math.round(hostRiskData.host.risk.calculated_score_norm)
                : getEmptyTagValue()}
            </>
          ),
        },
        {
          title: (
            <RiskScoreHeaderTitle
              title={i18n.HOST_RISK_CLASSIFICATION}
              riskScoreEntity={RiskScoreEntity.host}
            />
          ),
          description: (
            <>
              {hostRiskData ? (
                <RiskScore severity={hostRiskData.host.risk.calculated_level} hideBackgroundColor />
              ) : (
                getEmptyTagValue()
              )}
            </>
          ),
        },
      ];
    }, [hostRisk]);

    const column: DescriptionList[] = useMemo(
      () => [
        {
          title: i18n.HOST_ID,
          description:
            data && data.host
              ? hostIdRenderer({ host: data.host, isDraggable, noLink: true })
              : getEmptyTagValue(),
        },
        {
          title: i18n.FIRST_SEEN,
          description: (
            <FirstLastSeen
              indexPatterns={indexNames}
              field={'host.name'}
              value={hostName}
              type={FirstLastSeenType.FIRST_SEEN}
            />
          ),
        },
        {
          title: i18n.LAST_SEEN,
          description: (
            <FirstLastSeen
              indexPatterns={indexNames}
              field={'host.name'}
              value={hostName}
              type={FirstLastSeenType.LAST_SEEN}
            />
          ),
        },
      ],
      [data, indexNames, hostName, isDraggable]
    );
    const firstColumn = useMemo(
      () =>
        userPermissions
          ? [
              ...column,
              {
                title: i18n.MAX_ANOMALY_SCORE_BY_JOB,
                description: (
                  <AnomalyScores
                    anomalies={anomaliesData}
                    startDate={startDate}
                    endDate={endDate}
                    isLoading={isLoadingAnomaliesData}
                    narrowDateRange={narrowDateRange}
                  />
                ),
              },
            ]
          : column,
      [
        anomaliesData,
        column,
        endDate,
        isLoadingAnomaliesData,
        narrowDateRange,
        startDate,
        userPermissions,
      ]
    );

    const descriptionLists: Readonly<DescriptionList[][]> = useMemo(
      () => [
        firstColumn,
        [
          {
            title: i18n.IP_ADDRESSES,
            description: (
              <DefaultFieldRenderer
                rowItems={getOr([], 'host.ip', data)}
                attrName={'host.ip'}
                idPrefix={contextID ? `host-overview-${contextID}` : 'host-overview'}
                isDraggable={isDraggable}
                render={(ip) => (ip != null ? <NetworkDetailsLink ip={ip} /> : getEmptyTagValue())}
              />
            ),
          },
          {
            title: i18n.MAC_ADDRESSES,
            description: getDefaultRenderer('host.mac', data),
          },
          { title: i18n.PLATFORM, description: getDefaultRenderer('host.os.platform', data) },
        ],
        [
          { title: i18n.OS, description: getDefaultRenderer('host.os.name', data) },
          { title: i18n.FAMILY, description: getDefaultRenderer('host.os.family', data) },
          { title: i18n.VERSION, description: getDefaultRenderer('host.os.version', data) },
          { title: i18n.ARCHITECTURE, description: getDefaultRenderer('host.architecture', data) },
        ],
        [
          {
            title: i18n.CLOUD_PROVIDER,
            description: getDefaultRenderer('cloud.provider', data),
          },
          {
            title: i18n.REGION,
            description: getDefaultRenderer('cloud.region', data),
          },
          {
            title: i18n.INSTANCE_ID,
            description: getDefaultRenderer('cloud.instance.id', data),
          },
          {
            title: i18n.MACHINE_TYPE,
            description: getDefaultRenderer('cloud.machine.type', data),
          },
        ],
      ],
      [contextID, data, firstColumn, getDefaultRenderer, isDraggable]
    );
    return (
      <>
        <InspectButtonContainer>
          <OverviewWrapper
            direction={isInDetailsSidePanel ? 'column' : 'row'}
            data-test-subj="host-overview"
          >
            {!isInDetailsSidePanel && (
              <InspectButton queryId={id} title={i18n.INSPECT_TITLE} inspectIndex={0} />
            )}
            {descriptionLists.map((descriptionList, index) => (
              <OverviewDescriptionList descriptionList={descriptionList} key={index} />
            ))}

            {loading && (
              <Loader
                overlay
                overlayBackground={
                  darkMode ? darkTheme.euiPageBackgroundColor : lightTheme.euiPageBackgroundColor
                }
                size="xl"
              />
            )}
          </OverviewWrapper>
        </InspectButtonContainer>
        {isLicenseValid && (
          <HostRiskOverviewWrapper
            gutterSize={isInDetailsSidePanel ? 'm' : 'none'}
            direction={isInDetailsSidePanel ? 'column' : 'row'}
            data-test-subj="host-risk-overview"
            $width={isInDetailsSidePanel ? '100%' : '50%'}
          >
            <EuiFlexItem>
              <DescriptionListStyled listItems={[hostRiskScore]} />
            </EuiFlexItem>
            <EuiFlexItem>
              <DescriptionListStyled listItems={[hostRiskLevel]} />
            </EuiFlexItem>
          </HostRiskOverviewWrapper>
        )}

        {data && data.endpoint != null ? (
          <>
            <EuiHorizontalRule />
            <OverviewWrapper direction={isInDetailsSidePanel ? 'column' : 'row'}>
              <EndpointOverview contextID={contextID} data={data.endpoint} />

              {loading && (
                <Loader
                  overlay
                  overlayBackground={
                    darkMode ? darkTheme.euiPageBackgroundColor : lightTheme.euiPageBackgroundColor
                  }
                  size="xl"
                />
              )}
            </OverviewWrapper>
          </>
        ) : null}
      </>
    );
  }
);

HostOverview.displayName = 'HostOverview';
