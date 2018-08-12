const Address = require('mongoose').model('Address');

module.exports = {
    create(req, res){
        console.log(req.body)
        const contact = new Address({
            first: req.body.first,
            last: req.body.last,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            email: req.body.email,
            bday: req.body.bday,
            twitter: req.body.twitter,
            phone: req.body.phone
        });
        
        contact.save(function(err){
            if(err){
                console.log('err')
                res.json(err)
            } else {
                console.log("successful save")
                res.json("success")
            }
        })
    },

    index(req, res){
        Address.find({}, function(err, allAddresses){
            if(err){
                console.log("error finding all", err)
                res.json(err)
            } else {
                console.log("found all contacts")
                res.json(allAddresses)
            }
        }).sort("last")
    },

    show(req, res){
        Address.findOne({_id: req.params.id}, function(err, thisContact){
            if(err){
                console.log("SERVER.JS > error retrieving one contact")
                res.json(err)
            } else {
                console.log("SERVER.JS > successfully retrieved one contact")
                res.json(thisContact)
            }
        })    
    }
}