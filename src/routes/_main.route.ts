import { Router } from 'express';
import UsersRoute from './users.route';
import DashboardsRoute from './dashboards.route';
import ProfilesRoute from './profiles.route';
import CompanysRoute from './companys.route';
import PlansRoute from './plans.route';
const mainRoute = Router();

mainRoute.use('/users', UsersRoute);
mainRoute.use('/dashboards', DashboardsRoute);
mainRoute.use('/profiles', ProfilesRoute);
mainRoute.use('/companys', CompanysRoute);
mainRoute.use('/plans', PlansRoute);

export default mainRoute;
