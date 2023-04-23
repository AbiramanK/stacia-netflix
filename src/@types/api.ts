export type UserType = "customer" | "manager" | "admin";

export interface AuthenticationOutput {
  id: number;
  isActive: boolean;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  type: UserType;
  userName: string;
}
