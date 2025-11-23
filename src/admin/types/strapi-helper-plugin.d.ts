/**
 * Type declarations for @strapi/strapi/admin
 * These types are available at runtime but may not be in the type definitions
 */

declare module '@strapi/strapi/admin' {
  export function useCMEditViewDataManager(): {
    initialData: any;
    modifiedData: any;
    slug?: string;
    layout?: any;
  };

  export function useNotification(): (options: {
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  }) => void;

  export function useFetchClient(): {
    get: (url: string, config?: any) => Promise<{ data: any }>;
    post: (url: string, data?: any, config?: any) => Promise<{ data: any }>;
    put: (url: string, data?: any, config?: any) => Promise<{ data: any }>;
    delete: (url: string, config?: any) => Promise<{ data: any }>;
  };
}

