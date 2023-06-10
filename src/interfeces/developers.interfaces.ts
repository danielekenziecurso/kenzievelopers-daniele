type TDeveloper = {
  id: number;
  name: string;
  email: string;
};

type TDeveloperRequest = Omit<TDeveloper, "id">;

export { TDeveloper, TDeveloperRequest };
