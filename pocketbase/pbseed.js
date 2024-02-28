import PocketBase from 'pocketbase';
import dotenv from 'dotenv';
    
dotenv.config({ path: '../.env' });
// import {type Transaction, User} from "../src/types"


async function run() {
    console.log("url, email, password", process.env.PUBLIC_POCKETBASE_URL, process.env.PB_EMAIL, process.env.PB_PASSWORD)
    const pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL)

    await pb.admins.authWithPassword(
        process.env.PB_EMAIL,
        process.env.PB_PASSWORD
    )

    let user_data = [
        {
            username: "johndoe",
            name: "John Doe",
            email: "john@doe.com",
            emailVisibility: true,
            password: "password",
            passwordConfirm: "password",
        },
        {
            username: "janedoe",
            name: "Jane Doe",
            email: "jane@doe.com",
            emailVisibility: true,
            password: "password",
            passwordConfirm: "password",
        },
        {
            username: "bhavkumar21",
            name: "Bhavesh Kumar",
            email: "bhavkumar21@gmail.com",
            emailVisibility: true,
            password: "password",
            passwordConfirm: "password",
        }
    ]


    // Upload
    for (let i = 0; i < user_data.length; i++) {
        const res = await pb.collection("users").create(user_data[i])
        console.log("res", res)
        user_data[i].id = res.id
    }
    // await pb.collections("users").create

    // Generate a list of random transactions with location, amount, host id, guest id
    let transactions = [
        {
            location: "Starbucks",
            amount: 5.00,
            host: user_data[0].id,
            guest: user_data[1].id,
        },
        {
            location: "Starbucks",
            amount: 10.00,
            host: user_data[1].id,
            guest: user_data[0].id,
        },
        {
            location: "Starbucks",
            amount: 15.00,
            host: user_data[2].id,
            guest: user_data[0].id,
        }
    ]

    // Upload
    for (let i = 0; i < transactions.length; i++) {
        const res = await pb.collection("transactions").create(transactions[i])
        console.log("res", res)
        transactions[i].id = res.id
    }

}

run()