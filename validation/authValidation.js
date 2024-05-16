import zod from "zod";

const loginSchema = zod.object({

  email: zod
    .string()
    .email()
    .trim()
    .min(4, "Email must be at least 4 characters long")
    .max(50, "Email must be at most 50 characters long"),

  password: zod
    .string()
    .trim()
    .min(5, "Password must be at least 5 characters long")
    .max(10, "Password must be at most 10 characters long"),
});

const registerSchema = zod.object({

  name: zod
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long"),

  email: zod
    .string()
    .email()
    .trim()
    .min(4, "Email must be at least 4 characters long")
    .max(50, "Email must be at most 50 characters long"),

  password: zod
    .string()
    .trim()
    .min(5, "Password must be at least 5 characters long")
    .max(10, "Password must be at most 10 characters long"),
});

export { loginSchema, registerSchema }