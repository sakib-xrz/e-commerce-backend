const { Router } = require('express');

const authRoutes = require('../apis/auth/index.js');

const router = Router();

const routes = [
    {
        path: '/auth',
        route: authRoutes
    }
];

routes.forEach(route => {
    router.use(route.path, route.route);
});

module.exports = router;
