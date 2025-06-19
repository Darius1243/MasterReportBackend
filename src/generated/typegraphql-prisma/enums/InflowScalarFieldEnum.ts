import * as TypeGraphQL from "type-graphql";

export enum InflowScalarFieldEnum {
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
TypeGraphQL.registerEnumType(InflowScalarFieldEnum, {
  name: "InflowScalarFieldEnum",
  description: undefined,
});
