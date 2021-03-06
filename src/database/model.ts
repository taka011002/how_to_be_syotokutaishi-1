import { CreateLocalRepository } from './local-database';

export interface Database {
  fetchAllDataDocuments(): Promise<DataDocument[]>;
  fetchUserData(uid: string): Promise<UserDocument>;
  updateUserData(
    uid: string,
    newRate: number,
    earnExp: number,
  ): Promise<UserDocument>;
  insertUserData(uid: string): Promise<UserDocument>;
}

export interface UserDocument {
  uid: string;
  exp: number;
  earnExp: number;
}

export interface DataDocument {
  level: number;
  title: string;
  id: string;
  problems: Problem[];
}

export interface Problem {
  statement: string;
  collectAnswer: boolean;
}

export const NewDatabase = (): Database => {
  // TODO: 後でfirebaseの対応をする。
  return CreateLocalRepository();
};
