// generic type, enum

interface User<Type extends object>{
    userName: string,
    userAge: number,
    userActivities: Type
}

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

enum userOrders {
    pending = "wait",
    accepted = "ok",
    rejected = "not ok"
}

const orders : {status: userOrders, message: string}[] = [
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
]

console.log(orders)














