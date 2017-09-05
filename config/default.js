module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://zhangzhilin:zzl123698@ds013192.mlab.com:13192/myblog'
};
