export interface IUser {
  id: number;
  name: string;
  last_name: string;
  maternal_name: string;
  email: string;
  phone: string;
  prefix_phone: string;
  role: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
  producer: {
    id: number;
    producer_id: number;
  } | null;
  client: {
    id: number;
    address: string | null;
    zip_code: string | null;
    birthday: Date | null;
    gender: string | null;
  } | null;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    // eslint-disable-next-line no-unused-vars
    interface Request {
      currentUser?: IUser;
    }
  }
}
