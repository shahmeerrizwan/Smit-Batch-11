// generic type, enum
// const obj : User<{name: string, age: number}> = {
//     userName : "saylani",
//     userAge: 1999,
//     userActivities: {
//         name: "Saad",
//         age: 24
//     }
// }
// console.log(obj.userActivities.name)
// enum
var userOrders;
(function (userOrders) {
    userOrders["pending"] = "wait";
    userOrders["accepted"] = "ok";
    userOrders["rejected"] = "not ok";
})(userOrders || (userOrders = {}));
var orders = [
    {
        status: userOrders.pending,
        message: 'pending'
    },
    {
        status: userOrders.accepted,
        message: 'accepted'
    },
    {
        status: userOrders.rejected,
        message: 'rejected'
    },
];
console.log(orders);
