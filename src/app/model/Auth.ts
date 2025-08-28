export interface loginCredentials {
  email: string;
  password: string;
}

export interface registerCredentials {
    fullname: string;
    email: string;
    mobileNumber: number;
    dateOfBirth: Date;
    gender: string;
    role: "CUSTOMER" | "MERCHANT" | "ADMIN";
    password: string;
    confirmPassword: string;    
}