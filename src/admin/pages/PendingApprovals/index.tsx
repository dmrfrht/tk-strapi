/**
 * Pending Approvals Page
 * 
 * Shows all pending approvals in a dedicated page
 */

import React, { useEffect, useState } from 'react';
// @ts-ignore - These are available at runtime from Strapi admin
import { useFetchClient, useNotification } from '@strapi/strapi/admin';
import {
  Box,
  Button,
  Typography,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Link,
} from '@strapi/design-system';

interface PendingApproval {
  contentType: string;
  id: number;
  title: string;
  submittedAt: string;
  submittedBy: any;
  locale?: string;
}

export default function PendingApprovalsPage() {
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
      if (err.response?.status === 403) {
        toggleNotification({
          type: 'error',
          message: 'You do not have permission to view pending approvals',
        });
      } else {
        toggleNotification({
          type: 'error',
          message: err.message || 'Failed to fetch pending approvals',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (item: PendingApproval) => {
    const key = `${item.contentType}-${item.id}`;
    if (processing.has(key)) return;

    try {
      setProcessing((prev) => new Set(prev).add(key));

      const contentType = item.contentType
        .replace('api::', '')
        .replace('.page', '')
        .replace('.article', '')
        .replace('.faq-question', '')
        .replace('.faq-topic', '')
        .replace('.faq-section', '');
      const url = `/api/approval/approve/${contentType}/${item.id}${
        item.locale ? `?locale=${item.locale}` : ''
      }`;

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

      const contentType = item.contentType
        .replace('api::', '')
        .replace('.page', '')
        .replace('.article', '')
        .replace('.faq-question', '')
        .replace('.faq-topic', '')
        .replace('.faq-section', '');
      const url = `/api/approval/reject/${contentType}/${item.id}${
        item.locale ? `?locale=${item.locale}` : ''
      }`;

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

  const getContentTypeSlug = (contentType: string): string => {
    if (contentType.includes('page')) return 'api::page.page';
    if (contentType.includes('article')) return 'api::article.article';
    if (contentType.includes('faq-question')) return 'api::faq-question.faq-question';
    if (contentType.includes('faq-topic')) return 'api::faq-topic.faq-topic';
    if (contentType.includes('faq-section')) return 'api::faq-section.faq-section';
    return contentType;
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleString('tr-TR');
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <Box padding={8}>
        <Typography variant="alpha">Yükleniyor...</Typography>
      </Box>
    );
  }

  if (pendingItems.length === 0) {
    return (
      <Box padding={8}>
        <Typography variant="alpha">Onay Bekleyen İçerikler</Typography>
        <Box paddingTop={4}>
          <Typography variant="beta">Onay bekleyen içerik yok</Typography>
          <Typography variant="omega" textColor="neutral600">
            Tüm içerikler gözden geçirildi.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box padding={8}>
      <Box paddingBottom={4}>
        <Typography variant="alpha">Onay Bekleyen İçerikler</Typography>
        <Typography variant="omega" textColor="neutral600">
          {pendingItems.length} içerik onay bekliyor
        </Typography>
      </Box>

      <Table colCount={6} rowCount={pendingItems.length}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">İçerik Tipi</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Başlık</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Gönderen</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Gönderilme Tarihi</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Dil</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">İşlemler</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {pendingItems.map((item) => {
            const key = `${item.contentType}-${item.id}`;
            const isProcessing = processing.has(key);
            const contentTypeSlug = getContentTypeSlug(item.contentType);
            const editUrl = `/admin/content-manager/collection-types/${contentTypeSlug}/${item.id}`;

            return (
              <Tr key={key}>
                <Td>
                  <Badge>{getContentTypeName(item.contentType)}</Badge>
                </Td>
                <Td>
                  <Link to={editUrl}>
                    <Typography variant="omega">{item.title}</Typography>
                  </Link>
                </Td>
                <Td>
                  <Typography variant="omega">
                    {item.submittedBy?.email || 'N/A'}
                  </Typography>
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
                      Onayla
                    </Button>
                    <Button
                      variant="danger"
                      size="S"
                      onClick={() => {
                        const reason = prompt('Lütfen red nedeni girin:');
                        if (reason) {
                          handleReject(item, reason);
                        }
                      }}
                      disabled={isProcessing}
                    >
                      Reddet
                    </Button>
                    <Button
                      variant="tertiary"
                      size="S"
                      onClick={() => {
                        window.open(editUrl, '_blank');
                      }}
                    >
                      Görüntüle
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
}

