module.exports = {
    homePage: (req,res)=>{
        res.render("home");
    },
    aboutPage:(req,res)=>{
        res.render("about")
    },
    contactPage:(req,res)=>{
        res.render("contact")
    }
}