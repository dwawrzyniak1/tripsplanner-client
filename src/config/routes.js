import TripCreationForm from '../containers/creation/TripCreationForm';
import TripDetails from '../containers/planning/TripPlanningContainer';
import TripExplorationView from '../containers/exploring/TripExploringContainer';
import Home from '../components/Home';
import OAuth2RedirectHandler from '../components/auth/OAuth2RedirectHandler';
import ExplorePlaces from '../containers/planning/SearchPlacesCardsContainer';
import Chat from '../containers/planning/Chat';

const planningUrl = '/planning/:id';

export const tripPlanningUrl = id => `/planning/${id}`;

const mainRoutes = {
  public: [
    { path: '/', component: Home, exact: true },
    {
      path: '/explore',
      component: TripExplorationView,
      link: { text: 'Przeglądaj', icon: 'list layout' },
    },
    { path: '/oauth2/redirect', component: OAuth2RedirectHandler },
  ],
  private: [
    {
      path: '/create',
      component: TripCreationForm,
      link: { text: 'Stwórz', icon: 'add' },
    },
    { path: planningUrl, component: TripDetails },
  ],
};

const planningRoutes = {
  private: [
    {
      path: `${planningUrl}/explore`,
      component: ExplorePlaces,
      link: { text: 'Szukaj', icon: 'search', to: tripPlanningUrl },
    },
    {
      path: `${planningUrl}/schedule`,
      component: () => null,
      link: {
        text: 'Plan',
        icon: 'list alternate outline',
        to: tripPlanningUrl,
      },
    },
    {
      path: `${planningUrl}/transport`,
      component: () => null,
      link: { text: 'Transport', icon: 'bus', to: tripPlanningUrl },
    },
    {
      path: `${planningUrl}/accommodation`,
      component: () => null,
      link: { text: 'Nocleg', icon: 'bed', to: tripPlanningUrl },
    },
    {
      path: `${planningUrl}/chat`,
      component: Chat,
      link: { text: 'Czat', icon: 'chat', to: tripPlanningUrl },
    },
  ],
};

export { mainRoutes, planningRoutes };
