module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '367a73696e2a537a3bd66c1ffe44a6a5'),
  },
});
