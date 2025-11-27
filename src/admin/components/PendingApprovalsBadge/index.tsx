/**
 * Pending Approvals Badge Component
 * 
 * Shows a badge with the count of pending approvals in the admin panel
 */

import React, { useEffect, useState } from 'react';
// @ts-ignore - These are available at runtime from Strapi admin
import { useFetchClient } from '@strapi/strapi/admin';

interface PendingApproval {
  contentType: string;
  id: number;
  title: string;
  submittedAt: string;
  submittedBy: any;
  locale?: string;
}

export const PendingApprovalsBadge: React.FC = () => {
  const { get } = useFetchClient();
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingApprovals = async () => {
      try {
        setLoading(true);
        const { data } = await get('/api/approval/pending');
        
        if (data.success) {
          setPendingCount(data.count || 0);
        } else {
          setError('Failed to fetch pending approvals');
        }
      } catch (err: any) {
        console.error('Error fetching pending approvals:', err);
        setError(err.message || 'Failed to fetch pending approvals');
        // Don't show error to user, just set count to 0
        setPendingCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingApprovals();

    // Refresh every 30 seconds
    const interval = setInterval(fetchPendingApprovals, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null; // Don't show anything while loading
  }

  if (error || pendingCount === 0) {
    return null; // Don't show badge if no pending approvals
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        marginLeft: '8px',
      }}
    >
      <a
        href="/admin/pending-approvals"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
        title={`${pendingCount} onay bekleyen içerik`}
      >
        <span
          style={{
            backgroundColor: '#ff6b6b',
            color: 'white',
            borderRadius: '12px',
            padding: '2px 8px',
            fontSize: '12px',
            fontWeight: 'bold',
            minWidth: '20px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          {pendingCount}
        </span>
      </a>
    </div>
  );
};

