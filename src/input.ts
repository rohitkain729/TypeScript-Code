let statusCode = "Success";

enum Direction{
    up="East",
    down="North",
    right="West",
    left ="South"
}

enum StatusCode {
    Success="200",
    NotFOund="404",
    ServerError="500"
}

enum PaymentStatus{
    pending="PENDING",
    success="OK",
    failed="Fail"
}

function checkpayment(status:PaymentStatus){
 console.log(status)
}
checkpayment(PaymentStatus.pending);


console.log(Direction.left);
console.log(StatusCode.Success);
