module.exports = (body) => {
  const result = {
    type: 'button',
  };

  if (body.action) {
    result.action = body.action;
  }

  return result;
};
