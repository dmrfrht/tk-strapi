/**
 * Pending Approvals Page Component
 * 
 * Shows a list of all pending approvals in the admin panel
 */

import React, { useEffect, useState } from 'react';
// @ts-ignore - These are available at runtime from Strapi admin
import { useFetchClient, useNotification } from '@strapi/strapi/admin';
import { Box, Button, Typography, Table, Thead, Tbody, Tr, Th, Td, Badge } from '@strapi/design-system';

interface PendingApproval {
  contentType: string;
  id: number;
  title: string;
  submittedAt: string;
  submittedBy: any;
  locale?: string;
}

export const PendingApprovalsPage: React.FC = () => {
  const { get, post } = useFetchClient();
  const toggleNotification = useNotification();
  const [pendingItems, setPendingItems] = useState<PendingApproval[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [processing, setProcessing] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchPendingApprovals();
  }, []);

  const fetchPendingApprovals = async () => {
    try {
      setLoading(true);
      const { data } = await get('/api/approval/pending');
      
      if (data.success) {
        setPendingItems(data.data || []);
      } else {
        toggleNotification({
          type: 'warning',
          message: 'Failed to fetch pending approvals',
        });
      }
    } catch (err: any) {
      console.error('Error fetching pending approvals:', err);
      toggleNotification({
        type: 'error',
        message: err.message || 'Failed to fetch pending approvals',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (item: PendingApproval) => {
    const key = `${item.contentType}-${item.id}`;
    if (processing.has(key)) return;

    try {
      setProcessing((prev) => new Set(prev).add(key));
      
      const contentType = item.contentType.replace('api::', '').replace('.page', '').replace('.article', '').replace('.faq-question', '').replace('.faq-topic', '').replace('.faq-section', '');
      const url = `/api/approval/approve/${contentType}/${item.id}${item.locale ? `?locale=${item.locale}` : ''}`;
      
      const { data } = await post(url);
      
      if (data.success) {
        toggleNotification({
          type: 'success',
          message: 'Content approved and published successfully',
        });
        fetchPendingApprovals();
      } else {
        throw new Error(data.message || 'Failed to approve content');
      }
    } catch (err: any) {
      console.error('Error approving content:', err);
      toggleNotification({
        type: 'error',
        message: err.message || 'Failed to approve content',
      });
    } finally {
      setProcessing((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }
  };

  const handleReject = async (item: PendingApproval, reason: string) => {
    const key = `${item.contentType}-${item.id}`;
    if (processing.has(key)) return;

    if (!reason || reason.trim().length === 0) {
      toggleNotification({
        type: 'warning',
        message: 'Please provide a rejection reason',
      });
      return;
    }

    try {
      setProcessing((prev) => new Set(prev).add(key));
      
      const contentType = item.contentType.replace('api::', '').replace('.page', '').replace('.article', '').replace('.faq-question', '').replace('.faq-topic', '').replace('.faq-section', '');
      const url = `/api/approval/reject/${contentType}/${item.id}${item.locale ? `?locale=${item.locale}` : ''}`;
      
      const { data } = await post(url, { reason });
      
      if (data.success) {
        toggleNotification({
          type: 'success',
          message: 'Content rejected successfully',
        });
        fetchPendingApprovals();
      } else {
        throw new Error(data.message || 'Failed to reject content');
      }
    } catch (err: any) {
      console.error('Error rejecting content:', err);
      toggleNotification({
        type: 'error',
        message: err.message || 'Failed to reject content',
      });
    } finally {
      setProcessing((prev) => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }
  };

  const getContentTypeName = (contentType: string): string => {
    if (contentType.includes('page')) return 'Page';
    if (contentType.includes('article')) return 'Article';
    if (contentType.includes('faq-question')) return 'FAQ Question';
    if (contentType.includes('faq-topic')) return 'FAQ Topic';
    if (contentType.includes('faq-section')) return 'FAQ Section';
    return contentType;
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <Box padding={8}>
        <Typography variant="alpha">Loading pending approvals...</Typography>
      </Box>
    );
  }

  if (pendingItems.length === 0) {
    return (
      <Box padding={8}>
        <Typography variant="alpha">Pending Approvals</Typography>
        <Box paddingTop={4}>
          <Typography variant="beta">No pending approvals</Typography>
          <Typography variant="omega" textColor="neutral600">
            All content has been reviewed.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box padding={8}>
      <Box paddingBottom={4}>
        <Typography variant="alpha">Pending Approvals</Typography>
        <Typography variant="omega" textColor="neutral600">
          {pendingItems.length} item{pendingItems.length !== 1 ? 's' : ''} waiting for review
        </Typography>
      </Box>

      <Table colCount={5} rowCount={pendingItems.length}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Content Type</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Title</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Submitted At</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Locale</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Actions</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {pendingItems.map((item) => {
            const key = `${item.contentType}-${item.id}`;
            const isProcessing = processing.has(key);
            
            return (
              <Tr key={key}>
                <Td>
                  <Badge>{getContentTypeName(item.contentType)}</Badge>
                </Td>
                <Td>
                  <Typography variant="omega">{item.title}</Typography>
                </Td>
                <Td>
                  <Typography variant="omega">{formatDate(item.submittedAt)}</Typography>
                </Td>
                <Td>
                  <Typography variant="omega">{item.locale || 'N/A'}</Typography>
                </Td>
                <Td>
                  <Box display="flex" gap={2}>
                    <Button
                      variant="success"
                      size="S"
                      onClick={() => handleApprove(item)}
                      disabled={isProcessing}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      size="S"
                      onClick={() => {
                        const reason = prompt('Please provide a rejection reason:');
                        if (reason) {
                          handleReject(item, reason);
                        }
                      }}
                      disabled={isProcessing}
                    >
                      Reject
                    </Button>
                  </Box>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

