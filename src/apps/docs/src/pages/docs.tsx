import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const docsPage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/docs',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Docs!</h3>
      </div>
    );
  },
});
