import bcrypt from "bcrypt"

// password hashing function
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
}

// password comparing function
export const comparePassword = (password, hashedPassword) => {
    const isMatch = bcrypt.compare(password, hashedPassword)
    return isMatch
}