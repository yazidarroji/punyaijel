// User is not authenticated
function isNotAuth (request, response, next) {
    if (request.session.isAuth) {
      next();
    } else {
      response.status(401).render('401');
    }
   };
   
   // User is authenticated
   function isAuth (request, response, next) {
    if (request.session.isAuth) {
      response.redirect('/books');
    } else {
      next();
    }
   };
   
   // Current user
   function currentUser (request, response, next) {
    if (request.session.userEmail) {
      response.locals.userEmail = request.session.userEmail;
      next();
    } else {
      response.locals.userEmail = null;
      next();
    }
   };
   
export {
    isNotAuth,
    isAuth,
    currentUser
   };
   