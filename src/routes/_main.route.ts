import { Router } from 'express';
import UsersRoute from './users.route';
import DashboardsRoute from './dashboards.route';
import ProfilesRoute from './profiles.route';
import CompanysRoute from './companys.route';
import PlansRoute from './plans.route';
import ClassRoute from './class.route';
import LinkendAccountRoute from './linkedAccounts.route';
import PackageRoute from './packages.route';
import ShoppingCartsRoute from './shoppingCarts.route';
import VideosRoute from './videos.route';
const mainRoute = Router();

mainRoute.use('/users', UsersRoute);
mainRoute.use('/dashboards', DashboardsRoute);
mainRoute.use('/profiles', ProfilesRoute);
mainRoute.use('/companys', CompanysRoute);
mainRoute.use('/plans', PlansRoute);
mainRoute.use('/class', ClassRoute);
mainRoute.use('/linkedAccounts', LinkendAccountRoute);
mainRoute.use('/packages', PackageRoute);
mainRoute.use('/shoppingCarts', ShoppingCartsRoute);
mainRoute.use('/videos', VideosRoute);

export default mainRoute;
