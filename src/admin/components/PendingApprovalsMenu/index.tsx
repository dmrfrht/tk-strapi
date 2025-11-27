/**
 * Pending Approvals Menu Item
 * 
 * Adds a menu item to show pending approvals count
 */

import React, { useEffect, useState } from 'react';
import { useFetchClient, useRBAC } from '@strapi/helper-plugin';
import { Badge, Box, Typography } from '@strapi/design-system';

export const PendingApprovalsMenu: React.FC = () => {
  const { get } = useFetchClient();
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPendingApprovals = async () => {
      try {
        const { data } = await get('/api/approval/pending');
        if (data.success) {
          setPendingCount(data.count || 0);
        }
      } catch (err: any) {
        // If user doesn't have permission, don't show menu item
        if (err.response?.status === 403) {
          setPendingCount(0);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPendingApprovals();

    // Refresh every 30 seconds
    const interval = setInterval(fetchPendingApprovals, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading || pendingCount === 0) {
    return null;
  }

  return (
    <Box
      as="a"
      href="/admin/content-manager/collection-types/api::page.page?plugins[filter]=approvalStatus.status%3Apending"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Typography variant="sigma">Onay Bekleyenler</Typography>
      <Badge>{pendingCount}</Badge>
    </Box>
  );
};

