module.exports = {
    home:(req,res)=>{
        return res.render("home",{
            title: "ABAD Management",
            styles:[],
        })
    }
}