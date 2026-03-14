module.exports.apply = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const code = body.code || '';
  const discount = code === 'NEWYEAR' ? 0.2 : 0;
  return {
    statusCode: 200,
    body: JSON.stringify({ discount })
  };
};
