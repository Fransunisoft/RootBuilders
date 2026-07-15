export async function registerUser(data: unknown) {
    await new Promise((resolve)=>setTimeout(resolve,2000));
    // throw new Error("Server unavailable");
    
    console.log("submitted data: ", data)

    return {
        success: true,
        message: "Account created successfully"
    }
}