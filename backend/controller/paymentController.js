const paymentService = require("./../service/paymentService");

const getAllPayments= (req,res) =>{
    const allPayments = paymentService.getAllPayments();
    res.send(`All the payments here`);
}

const getPaymentsByFilter= (req,res) =>{
    const filterPayment = paymentService.getAllPayments(req.params.paymentType);
    res.send(`getting payments by filter ${req.params.paymentType}`);
}

const getDetailPayment= (req,res) =>{
    const aPayment = paymentService.getDetailPayment(req.params.paymentId);
    res.send(`Getting detail payment ${req.params.paymentId}`);

}

const deletePayment= (req,res) =>{
    const deletePayment = paymentService.deletePayment(req.params.paymentId);

}

module.exports = {
    getAllPayments,
    getPaymentsByFilter,
    getDetailPayment,
    deletePayment,
    exportPayment
}