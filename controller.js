const { Customers} = require('./schema')



module.exports.insertCustomers = async (req, res) => {
    console.log(req.body)
    const Customer = new Customers({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idproof:req.body.idproof,
        days:req.body.days,
        phoneNumber: Number(req.body.phoneNumber),
        checkindate:req.body.checkindate,
        checkoutdate:req.body.checkoutdate
    });
    await Customer.save();
    res.send({ msg: "Customer added" });
};

