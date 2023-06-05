interface ICourse {
  id?: number;
  title: string;
  description: string;
}
interface IAuth {
  identifier: string;
  password: string;
}

interface IUser {
  email: string;
  profile: IProfile;
}

interface IProfile {
  full_name: string;
}
