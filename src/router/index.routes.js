import home from '../controllers/home.controller'
import flow from '../controllers/flow.controller';
import budget from '../controllers/budget.controller';
import goals from '../controllers/goals.controller';
import error404 from '../controllers/404.controller';

const router = (route) => {
  switch (route) {
    case '#/':
      return home();
    case '#/flow':
      return flow();
    case '#/budget':
      return budget();
    case '#/goals':
      return goals();
    default:
      return error404();
  }
};

export { router };