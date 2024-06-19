import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { docsPage } from './docs';
import { homePage } from './home';

const routeTree = rootRoute.addChildren([docsPage, homePage]);

export const router = createRouter({ routeTree });
