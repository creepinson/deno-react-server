export default async (context, next) => {
  try {
    await next();
  } catch (err) {
    // console.log(err);
    context.response.status = 500;
    context.response.body = err.message;
  }
};
