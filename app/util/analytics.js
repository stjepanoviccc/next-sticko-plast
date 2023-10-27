import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-X3XPS5D9H4');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};