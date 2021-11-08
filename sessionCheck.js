
// General session function
function sessionCheck(req, res, next) {
  if (req.session.user && req.cookies.user_sid) {
    const { firstName } = req.session.user
    // redirecting authenticated user back to dashboard page
    res.redirect(`/dashboard?user=${firstName}`)
  } else next() // otherwise execute routing default behavior
}


module.exports = sessionCheck