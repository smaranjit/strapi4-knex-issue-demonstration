module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da84d7377c767ba9a70a0fbbe3160214'),
  },
});
