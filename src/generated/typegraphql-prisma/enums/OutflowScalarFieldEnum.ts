import * as TypeGraphQL from "type-graphql";

export enum OutflowScalarFieldEnum {
  id = "id",
  amount = "amount",
  date = "date",
  description = "description",
  personId = "personId",
  facilityId = "facilityId",
  jobId = "jobId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OutflowScalarFieldEnum, {
  name: "OutflowScalarFieldEnum",
  description: undefined,
});
