import {z} from "zod"

export const registerSchema = z.object({
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    phone: z.string().min(10, "Enter valid phone number"),
    country: z.string().min(2, "Select a country"),

    birthDate: z.string().min(2, "Required"),
    gender: z.string().min(2, "Required"),
    education: z.string().min(2, "Required"),
    employment: z.string().min(2, "Required"),

    cohort: z.string().min(2, "Required"),
    track: z.string().min(2, "Required"),
    skill: z.string().min(2, "Required"),
    media: z.string().min(2, "Required"),

})
.refine((data) => data.password === data.confirmPassword,
    {
        message: "Password do not match",
        path: ["confirmPassword"],
    }
)

export type RegisterFormdata = z.infer<typeof registerSchema>