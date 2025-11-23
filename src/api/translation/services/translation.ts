import type { Core } from '@strapi/strapi';
import translationServiceLogic from '../../../services/translation';

export default ({ strapi }: { strapi: Core.Strapi }) => {
  return translationServiceLogic({ strapi });
};

