const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async (req, res) => {
   try {
       console.log("it's this one?", req.body);
       const newUser = await User.create({
           username: req.body.username,
           email: req.body.email,
           password: req.body.password,
       });
       console.log('New User', newUser);
       if (newUser) {
           await req.session.save(() => {
           req.session.userId = newUser.id;
           req.session.username = newUser.username;
           req.session.userEmail = newUser.email;
           req.session.password = newUser.password;
           req.session.loggedIn = true;

           res.json(newUser);
       })};
   } catch (err) {
       res.status(500).json(err);
   }         
});

router.post('/login', async (req, res) => {
   try {
       console.log('am i here?', req.body);
       let user = await User.findOne({
           where: {
               email: req.body.email,
           },
       });
       console.log("I'm HERE!", user);
       if (!user) {
           res.status(400).json({ message: 'No user account found!' });
           return;
       } 

       let validPassword = user.checkPassword(req.body.password);

       if (!validPassword) {
           res.status(400).json({ message: 'No user account found!' });
           return;
       }

       req.session.save(() => {
           req.session.userId = user.id;
           req.session.email = user.email;
           req.session.loggedIn = true;

           res.json({ user, message: 'You are now logged in!' });
       })

   } catch (err) {
       res.status(400).json({ message: 'No user account found!' });
   }     
})

router.post('/logout', async (req, res) => {
  if(req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      })
  } else {
      res.status(404).end();
  }
});

module.exports = router;