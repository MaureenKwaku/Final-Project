const { tokenManager } = require('../helpers');

async function resolveUser({ token }) {
  try {
    const __user = await tokenManager.validateToken(token);
    let user = {
      _id: __user.id,
      role: __user.role,
    };
    return user;
  } catch (e) {
    return new Error('AuthenticationError');
  }
}

module.exports = resolveUser;
