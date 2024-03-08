import {client} from "@/app/lib/conectDB";

const createUser = async( ) => {
    try {
        const db = await client.connect().db("ecomm").createCollection("users",{
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["userName", "email","password"],
                    properties: {
                        userName: {
                            bsonType: "string",
                            description: "name of user - Required."
                        },
                        email: {
                            bsonType: "string",
                            description: "email of user - Required."
                        },
                        password: {
                            bsonType: "string",
                            description: "password of user  - Optional."
                        },
                        
                    }
                }
            }
        })

    } catch (error) {
        console.error('Error creating collection:', error);
    } finally { client.close();}
    
}