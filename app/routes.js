// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/home-page/reducer'),
          import('containers/home-page/sagas'),
          import('containers/home-page'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard/event-management',
      name: 'event-management',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/event-management/reducer'),
          import('containers/event-management/sagas'),
          import('containers/event-management/'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('eventManagement', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },  
      childRoutes: [
        {
          path: "past-events",
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/event-management/past-events/reducer'),
              import('containers/event-management/past-events/sagas'),
              import('containers/event-management/past-events'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('pastEvents', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
      }, {
          path: "upcoming-events",
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/event-management/upcoming-events/reducer'),
              import('containers/event-management/upcoming-events/sagas'),
              import('containers/event-management/upcoming-events'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('upcomingEvents', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
      }, {
          path: "ongoing-events",
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/event-management/ongoing-events/reducer'),
              import('containers/event-management/ongoing-events/sagas'),
              import('containers/event-management/ongoing-events'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('ongoingEvents', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
      }],
    },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/not-found-page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
