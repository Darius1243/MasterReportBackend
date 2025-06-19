import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowOrderByWithRelationInput } from "../../../inputs/InflowOrderByWithRelationInput";
import { InflowWhereInput } from "../../../inputs/InflowWhereInput";
import { InflowWhereUniqueInput } from "../../../inputs/InflowWhereUniqueInput";
import { InflowScalarFieldEnum } from "../../../../enums/InflowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class JobInflowsArgs {
  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  where?: InflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InflowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InflowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: true
  })
  cursor?: InflowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InflowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "amount" | "date" | "description" | "personId" | "facilityId" | "jobId" | "createdAt" | "updatedAt"> | undefined;
}
