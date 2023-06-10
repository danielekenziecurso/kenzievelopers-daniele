type TDeveloperInfos = {
  id: number;
  developerSince: number;
  preferredOS: "Windows" | "Linux" | "MacOS";
  developerId: number;
};

type TDeveloperInfosRequest = Omit<TDeveloperInfos, "id" | "developerId">;

interface Developer {
  developerId: number;
  developerName: string;
  developerEmail: string;
  developerInfoDeveloperSince: Date | null;
  developerInfoPreferredOS: string | null;
}

export { TDeveloperInfos, TDeveloperInfosRequest, Developer };
