import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OutflowOrderByWithRelationInput } from "../../../inputs/OutflowOrderByWithRelationInput";
import { OutflowWhereInput } from "../../../inputs/OutflowWhereInput";
import { OutflowWhereUniqueInput } from "../../../inputs/OutflowWhereUniqueInput";
import { OutflowScalarFieldEnum } from "../../../../enums/OutflowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class JobOutflowsArgs {
  @TypeGraphQL.Field(_type => OutflowWhereInput, {
    nullable: true
  })
  where?: OutflowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OutflowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OutflowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowWhereUniqueInput, {
    nullable: true
  })
  cursor?: OutflowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OutflowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "amount" | "date" | "description" | "personId" | "facilityId" | "jobId" | "createdAt" | "updatedAt"> | undefined;
}
