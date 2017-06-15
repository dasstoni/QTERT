FlowRouter.route('/',{
  action:function(){
    FlowLayout.render('layout', {sidebar:'sidebar', main: 'category', cart: 'cart'});
  }
});

FlowRouter.route('/categpry/:categoryName', {
  action:function(){
    FlowLayout.render('layout', {sidebar:'sidebar', main: 'category', cart: 'cart'});
  }
})
