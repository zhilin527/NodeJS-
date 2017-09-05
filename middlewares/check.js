module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {//没有用户信息
      req.flash('error', '未登录'); //通知弹窗中间件
      return res.redirect('/signin');//页面重定向
    }
    next();//页面跳转中间件
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录'); //
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};
