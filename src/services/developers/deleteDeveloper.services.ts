import { client } from "../../database";

const deleteDeveloperservices = async (developerId: string): Promise<void> => {
  await client.query('DELETE FROM "developers" WHERE "id" = $1;', [
    developerId,
  ]);
};

export { deleteDeveloperservices };
